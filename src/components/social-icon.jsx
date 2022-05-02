import React from 'react'
import { urlFor } from '../utils/client'
import { motion } from 'framer-motion'

function SocialIcon({ name, url, icon }) {
  return (
    <motion.li
      whileHover={{ y: -5 }}
      className='bg-light cursor-pointer rounded-lg p-2 drop-shadow-xl'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={urlFor(icon)} alt={name} className='h-6 w-6' />
      </a>
    </motion.li>
  )
}

export default SocialIcon
