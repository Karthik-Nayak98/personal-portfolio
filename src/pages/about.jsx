import BlockContent from '@sanity/block-content-to-react';
import React, { lazy, Suspense } from 'react';
import Container from '../components/container';
import Loader from '../components/loader';
import useSanity from '../hooks/useSanity';
import useTitle from '../hooks/useTitle';
import { client } from '../utils/client';
import serializer from '../utils/serializer';

const TechStack = lazy(() => import('./tech-stack'));

const About = () => {
  const query = '*[_type == "author"][0]{bio}';
  const userBio = useSanity(null, query);

  const title = 'About - Karthik Nayak';
  const description =
    'This page describes about what I do, my skillsets and my background.';

  useTitle(title, description);

  if (!userBio) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Container title='About me'>
        <section className='text-md mt-4 mb-10 rounded-2xl px-8 text-gray-600 dark:text-gray-400 md:px-12 lg:px-16'>
          <article className='prose max-w-none leading-7 text-gray-600 prose-a:text-accent dark:text-light'>
            <BlockContent
              blocks={userBio.bio}
              projectId={client.projectId}
              dataset={client.dataset}
              serializers={serializer}
            />
          </article>
        </section>
        <TechStack />
      </Container>
    </Suspense>
  );
};

export default About;
