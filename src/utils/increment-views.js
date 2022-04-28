import { db } from '../firebase/firebase-config'
import { ref, runTransaction } from 'firebase/database'

const incrementViews = async (slug) => {
  const viewRef = ref(db, `views/${slug}`)

  runTransaction(viewRef, (currentView) => {
    // Set the default view to 0
    if (currentView === null) currentView = 0
    return currentView + 1
  })
}

export default incrementViews
