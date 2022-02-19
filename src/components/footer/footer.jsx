import React from 'react';
import { urlFor } from '../../client';
import useSanity from '../../hooks/useSanity';

const Footer = () => {
  const sanityData = useSanity(null, 'social');

  return (
    <footer className='bg-dark my-4'>
      <div className='container mx-auto my-2 flex flex-col items-center justify-center'>
        <ul className='mt-4 flex items-center justify-around'>
          {sanityData &&
            sanityData.map((item) => (
              <span className='bg-light mx-2 rounded'>
                <a href={item.social_url} target='_blank' rel='noreferrer'>
                  <li className='inline-flex p-1'>
                    <img
                      src={urlFor(item.image)}
                      alt={item.name}
                      className='h-6 w-6'
                    />
                  </li>
                </a>
              </span>
            ))}
        </ul>
        <span className='text-light my-4 text-sm'>
          Copyright © 2022 • Karthik ☄️
        </span>
      </div>
    </footer>
  );
};

export default Footer;
