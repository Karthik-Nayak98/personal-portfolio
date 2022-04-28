import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { db } from '../firebase/firebase-config'
import { ref, onValue } from 'firebase/database'
import incrementViews from '../utils/increment-views'

function ViewCounter({ slug }) {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const viewRef = ref(db, `views/${slug}`)
    incrementViews(slug)

    // The onValue call now returns a function that (when called) removes the listener
    const unsubscribe = onValue(viewRef, (snapshot) => {
      setViews(snapshot.val())
    })

    return function cleanup() {
      unsubscribe()
    }
  }, [slug])

  return (
    <span className='mr-2 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 md:text-sm'>
      <AiOutlineEye className='h-4 w-4 md:h-5 md:w-5' />
      {views ? views : '---'} views
    </span>
  )
}

export default ViewCounter
