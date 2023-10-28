import React from 'react';
import BlogPost from '../components/blogpost';
import Container from '../components/container';
import Footer from '../components/footer';
import Loader from '../components/loader';
import useSanity from '../hooks/useSanity';
import useTitle from '../hooks/useTitle';

const Blog = () => {
  const query = `*[_type == 'blog']| order(publishedAt desc) {title, slug, tags, summary}`;
  const blogData = useSanity(null, query);

  const title = 'Blog - Karthik Nayak';
  const description = 'This page lists out all the blogposts written by me.';
  useTitle(title, description);

  if (!blogData) return <Loader />;

  return (
    <Container title='Blogs'>
      <section className='my-4 grid grid-cols-1 gap-y-8 px-8 md:px-12 lg:px-16'>
        {blogData.map((post) => (
          <BlogPost
            key={post.slug.current}
            slug={post.slug.current}
            title={post.title}
            summary={post.summary}
            tags={post.tags}
          />
        ))}
      </section>
      <Footer />
    </Container>
  );
};

export default Blog;
