import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='relative w-fit px-10 pb-2 text-2xl lg:my-3 lg:mx-52 lg:px-12 lg:text-3xl'>
      <h2 className='text-light font-semibold uppercase'>{title}</h2>
      <div className='border-accent absolute bottom-0 w-1/4 border-2'></div>
    </div>
  );
};

export default Header;
