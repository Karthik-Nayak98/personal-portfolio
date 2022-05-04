import React from 'react'

function Loader() {
  return (
    <div className='transfrom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='border-x-dark dark:border-x-light loader animate-spin-slow after:border-x-accent relative box-border h-14 w-14 rounded-full border-2 border-y-transparent after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-full after:border-[22px] after:border-y-transparent'></div>
    </div>
  )
}

export default Loader
