import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='relative w-fit px-8 pb-2 text-2xl md:px-12 md:text-3xl lg:my-3 lg:px-16 lg:text-5xl'>
      <h2 className='text-dark dark:text-light font-semibold capitalize'>{title}</h2>
      <div className='border-accent absolute bottom-0 w-2/5 border-2'></div>
    </div>
  )
}

export default Header
