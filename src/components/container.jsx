import React from 'react'
import Header from './header'
import { motion } from 'framer-motion'

function Container(props) {
  return (
    <motion.main
      initial={{ x: -200, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        y: -100,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
      }}
      className='container mx-auto max-w-4xl'>
      <Header title={props.title} />
      {props.children}
    </motion.main>
  )
}

export default Container
