import { useState, useEffect } from 'react';
import { client } from '../client';

const useSanity = (initialValue, name) => {
  const [sanityData, setSanityData] = useState(initialValue);
  const query = `*[_type == "${name}"]`;
  useEffect(() => {
    client
      .fetch(query)
      .then((data) => setSanityData(data))
      .catch((err) => console.log(err));
  }, [query]);

  return sanityData;
};

export default useSanity;
