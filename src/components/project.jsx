import React from 'react'
import { Link } from 'react-router-dom'

function Project({ title, summary, slug, banner }) {
  return (
    <Link to={`/work/${slug}`}>
      <article className='transfrom cursor-pointer overflow-hidden rounded shadow-lg duration-150 hover:scale-105'>
        <img className='h-[175px] w-full object-cover' src={banner} alt={title} />
        <div className='bg-light px-6 py-4 dark:bg-gray-700 dark:bg-opacity-30'>
          <div className='text-dark mb-2 text-xl font-bold dark:text-white'>
            {title}
          </div>
          <p className='text-sm text-gray-600 dark:text-gray-400'>{summary}</p>
        </div>
      </article>
    </Link>
  )
}

export default Project
