import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='relative w-fit px-10 pb-2 text-3xl font-bold capitalize lg:my-3 lg:mx-52 lg:px-8 lg:text-4xl'>
      <h2 className='text-light'>{title}</h2>
      <div className='border-accent absolute bottom-0 w-1/2 border-2'></div>
    </div>
  );
};

export default Header;
