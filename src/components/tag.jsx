import React from 'react'

function Tag({ value }) {
  return (
    <span className='rounded bg-gray-400 bg-opacity-20 py-1 px-2 capitalize'>
      {value}
    </span>
  )
}

export default Tag
