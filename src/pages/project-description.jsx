import BlockContent from '@sanity/block-content-to-react';
import { format } from 'date-fns';
import React from 'react';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';
import useSanity from '../hooks/useSanity.js';
import useTitle from '../hooks/useTitle.js';
import { client, urlFor } from '../utils/client';
import serializer from '../utils/serializer.js';

import { motion } from 'framer-motion';
import Footer from '../components/footer.jsx';

function ProjectDescription() {
  const { project } = useParams();

  // Capitalize first letter of the project title.
  const updatedProject = project.charAt(0).toUpperCase() + project.slice(1);
  const title = `${updatedProject} - Karthik Nayak`;
  useTitle(title);

  const query = `*[slug.current == $slug][0]{
                  title,
                  slug,
                  github_url,
                  demo_url,
                  publishedAt,
                  banner,
                  description,
                  'name': author->name,
                  'image': author->image,
                }`;

  const projectData = useSanity(null, query, project);

  if (!projectData) return <Loader />;

  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{
        y: -100,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
      }}
      className='container mx-auto my-6 max-w-4xl px-8 md:px-12 lg:px-16'>
      <figure className='rounded'>
        <img
          className='rounded'
          src={urlFor(projectData.banner?.asset._ref)}
          alt={projectData.name}
        />
      </figure>
      <h2 className='my-4 text-4xl font-semibold text-dark dark:text-light'>
        {projectData.title}
      </h2>
      <article>
        <div className='inline-flex w-full flex-col justify-between md:flex-row'>
          <div>
            <span className='my-2 flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <img
                className='h-6 w-6 rounded-full md:h-8 md:w-8'
                src={urlFor(projectData.image?.asset._ref)}
                alt='Karthik Nayak'
              />
              <span className='text-xs md:text-sm'>{projectData.name}</span>/
              <span className='text-xs md:text-sm'>
                {format(new Date(projectData.publishedAt), 'MMM-yyyy')}
              </span>
            </span>
          </div>

          <div className='flex items-center gap-4'>
            <a target='_blank' href={projectData.github_url} rel='noreferrer'>
              <span className='inline-flex cursor-pointer items-center gap-1 text-xs text-gray-600 dark:text-gray-400 md:text-sm'>
                <AiOutlineGithub size={25} className='text-dark dark:text-light' />
                Source code
              </span>
            </a>
            <a target='_blank' href={projectData.demo_url} rel='noreferrer'>
              <span className='inline-flex cursor-pointer items-center gap-1 text-xs text-gray-600 dark:text-gray-400 md:text-sm'>
                <AiOutlineLink size={20} className='text-dark dark:text-light' />
                Demo Live
              </span>
            </a>
          </div>
        </div>
        <div className='prose max-w-none text-gray-600 prose-headings:text-dark prose-a:text-accent prose-blockquote:text-gray-600 prose-strong:text-dark prose-ol:text-gray-600 dark:text-light dark:prose-headings:text-light dark:prose-blockquote:text-gray-400 dark:prose-strong:text-light dark:prose-ol:text-light'>
          <BlockContent
            blocks={projectData.description}
            projectId={client.projectId}
            dataset={client.dataset}
            serializers={serializer}
          />
        </div>
      </article>
      <Footer />
    </motion.section>
  );
}

export default ProjectDescription;
