import React from 'react';
import Header from '../components/header/header';
import { FiArrowRight } from 'react-icons/fi';

function Error() {
  return (
    <section className='container mx-auto max-w-4xl'>
      <Header title='Error 404' />
      <div className='px-8 md:px-12 lg:px-16'>
        <h2 className='my-4 text-lg font-medium md:text-xl'>
          Oops!! We can't find that page.
        </h2>
        <div className='text-gray-400'>
          The page you are looking for does not exist. You may have mistyped the
          address or the page may have moved. But you can click the button below
          to go back to the homepage.
          <button className='border-accent text-accent my-4 mx-auto flex items-center gap-1 rounded-full border-2 px-4 py-1 text-sm font-medium capitalize'>
            Go back
            <FiArrowRight size={'1rem'} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Error;
