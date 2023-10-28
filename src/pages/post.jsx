import BlockContent from '@sanity/block-content-to-react';
import { format } from 'date-fns';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Loader from '../components/loader.jsx';
import Tag from '../components/tag.jsx';
import ViewCounter from '../components/viewcounter.jsx';
import useSanity from '../hooks/useSanity.js';
import useTitle from '../hooks/useTitle.js';
import { client, urlFor } from '../utils/client.js';
import serializer from '../utils/serializer.js';

import { motion } from 'framer-motion';
import Footer from '../components/footer.jsx';

function Post() {
  const { slug } = useParams();
  const location = useLocation();

  const title = `${location.state?.title} - Karthik Nayak`;
  useTitle(title);

  const query = `*[slug.current == $slug][0]{
                    title,
                    slug,
                    tags,
                    publishedAt,
                    mainImage,
                    body,
                    'name': author->name,
                    'image': author->image,
                }`;

  const postData = useSanity(null, query, slug);

  if (!postData) return <Loader />;

  return (
    <motion.main
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{
        y: -100,
        opacity: 0,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className='container mx-auto max-w-4xl px-8 md:px-12 lg:px-16'>
      <article className='flex flex-col gap-4 rounded-md md:flex-row md:gap-12'>
        <div className=''>
          <h1 className='my-2 text-3xl font-bold md:text-4xl'>{postData.title}</h1>
          <div className='flex flex-col justify-between md:flex-row md:items-center'>
            <span className='my-2 flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <img
                className='h-6 w-6 rounded-full md:h-8 md:w-8'
                src={urlFor(postData.image.asset._ref)}
                alt='Karthik Nayak'
              />
              <span className='text-xs md:text-sm'>{postData.name}</span>/
              <span className='text-xs md:text-sm'>
                {format(new Date(postData.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </span>

            <ViewCounter slug={slug} />
          </div>
          <div className='prose max-w-3xl text-gray-600 prose-headings:text-dark prose-a:text-accent prose-blockquote:text-gray-600 prose-strong:text-dark dark:text-light dark:prose-headings:text-light dark:prose-a:text-accent dark:prose-blockquote:text-light dark:prose-strong:text-light dark:prose-ol:text-light'>
            <BlockContent
              blocks={postData.body}
              projectId={client.projectId}
              dataset={client.dataset}
              serializers={serializer}
            />
          </div>
          <div className='mt-8 flex flex-wrap gap-2 text-xs'>
            {postData?.tags.map((tag) => (
              <Tag key={tag} value={tag} />
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </motion.main>
  );
}

export default Post;
