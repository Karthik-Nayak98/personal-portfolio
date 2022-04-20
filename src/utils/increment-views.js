import { db } from '../firebase/firebase-config'
import { ref, runTransaction } from 'firebase/database'

const incrementViews = async (slug) => {
  const viewRef = ref(db, `views/${slug}`)

  runTransaction(viewRef, (currentView) => {
    if (currentView === null) currentView = 1
    return currentView + 1
  })
}

export default incrementViews
