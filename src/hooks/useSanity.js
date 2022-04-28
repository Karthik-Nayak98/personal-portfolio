import { useState, useEffect } from 'react'
import { client } from '../utils/client'

const useSanity = (initialValue, query, slug = '') => {
  const [sanityData, setSanityData] = useState(initialValue)
  useEffect(() => {
    client
      .fetch(query, { slug })
      .then((data) => {
        setSanityData(data)
      })
      .catch((err) => console.log(err))
  }, [query, slug])

  return sanityData
}

export default useSanity
