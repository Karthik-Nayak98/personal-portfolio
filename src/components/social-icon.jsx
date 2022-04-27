import React from 'react'
import { urlFor } from '../utils/client'

function SocialIcon({ name, url, icon }) {
  return (
    <span className='bg-light rounded-lg p-1 drop-shadow-xl'>
      <a href={url} target='_blank' rel='noreferrer'>
        <li className='p-[1px]'>
          <img src={urlFor(icon)} alt={name} className='h-6 w-6' />
        </li>
      </a>
    </span>
  )
}

export default SocialIcon
