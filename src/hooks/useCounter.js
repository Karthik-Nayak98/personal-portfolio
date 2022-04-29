import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { db } from '../firebase/firebase-config'

function useCounter(slug) {
  const [views, setViews] = useState(null)

  useEffect(() => {
    const viewRef = ref(db, `views/${slug}`)

    // The onValue call now returns a function that (when called) removes the listener
    const unsubscribe = onValue(viewRef, (snapshot) => {
      setViews(snapshot.val())
    })

    return function cleanup() {
      unsubscribe()
    }
  }, [slug])

  return [views, setViews]
}

export default useCounter
