import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebase-config'
import Tag from './tag'
import { AiOutlineEye } from 'react-icons/ai'

function BlogPost({ slug, tags, title, summary }) {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const viewRef = ref(db, `views/${slug}`)
    onValue(viewRef, (snapshot) => {
      setViews(snapshot.val())
    })
  })
  return (
    <Link to={`/blog/${slug}`}>
      <article className='flex flex-col gap-4 rounded-md md:flex-row md:gap-12'>
        <div className='flex-1'>
          <div className='flex flex-col justify-between sm:flex-row sm:items-center'>
            <h4 className='my-2 text-base font-semibold md:text-xl'>{title}</h4>
            <span className='mr-2 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 md:text-sm'>
              <AiOutlineEye className='h-4 w-4 md:h-5 md:w-5' />
              {views ? views : '---'} views
            </span>
          </div>
          <div className='my-2 text-sm text-gray-600 dark:text-gray-400 md:text-base'>
            {summary}
          </div>
          <div className='flex flex-wrap gap-2 text-xs'>
            {tags.map((tag) => (
              <Tag key={tag} value={tag} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogPost
