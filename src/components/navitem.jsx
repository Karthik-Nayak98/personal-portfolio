import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavItem({ navtext, route }) {
  const linkVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      y: -10,
      opacity: 0,
    },
  }
  return (
    <motion.li variants={linkVariant}>
      <NavLink
        className={({ isActive }) =>
          `dark:hover:bg-light rounded-md py-2 px-4 capitalize text-gray-600 hover:bg-gray-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 ${
            isActive ? 'dark:text-light font-medium text-black' : ''
          }`
        }
        to={`${route}`}>
        {navtext}
      </NavLink>
    </motion.li>
  )
}

export default NavItem
