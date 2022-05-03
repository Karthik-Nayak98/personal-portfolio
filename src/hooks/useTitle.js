import { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return title
}

export default useTitle
