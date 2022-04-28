import React from 'react'
import useSanity from '../hooks/useSanity'
import Container from '../components/container'
import BlogPost from '../components/blogpost'
import Loader from '../components/loader'

const Blog = () => {
  const query = `*[_type == 'blog']{title, slug, tags, summary}`
  const blogData = useSanity(null, query)

  if (!blogData) return <Loader />

  return (
    <Container title='Blogs'>
      <section className='my-4 grid grid-cols-1 gap-y-8 px-8 md:px-12 lg:px-16'>
        {blogData &&
          blogData.map((post) => (
            <BlogPost
              key={post.slug.current}
              slug={post.slug.current}
              title={post.title}
              summary={post.summary}
              tags={post.tags}
            />
          ))}
      </section>
    </Container>
  )
}

export default Blog
