import React from 'react'
import { urlFor } from '../utils/client'
import { motion } from 'framer-motion'

function SocialIcon({ name, url, icon }) {
  return (
    <motion.span
      whileHover={{ y: -5 }}
      className='bg-light cursor-pointer rounded-lg p-1 drop-shadow-xl'>
      <a href={url} target='_blank' rel='noreferrer'>
        <li className='p-[1px]'>
          <img src={urlFor(icon)} alt={name} className='h-6 w-6' />
        </li>
      </a>
    </motion.span>
  )
}

export default SocialIcon
