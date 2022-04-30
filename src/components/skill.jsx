import React from 'react'
import { urlFor } from '../utils/client'

import { motion } from 'framer-motion'

function Skill({ image, skill }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className='dark:bg-light box-border flex h-[72px] w-32 flex-col items-center justify-center gap-1 rounded-md bg-gray-100 drop-shadow-xl md:w-28'>
      <img className='h-8 w-8' src={urlFor(image)} alt={skill} />
      <span className='text-dark text-sm font-medium'>{skill}</span>
    </motion.article>
  )
}

export default Skill
