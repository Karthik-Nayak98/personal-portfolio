import React from 'react';

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className='bottom-0'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <span className='text-sm text-gray-600 dark:text-gray-400'>
          Made with ❤️ by Karthik Nayak © {currentDate.getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
