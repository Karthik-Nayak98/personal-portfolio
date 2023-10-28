import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { linkVariant } from '../utils/variants';

function NavItem({ navtext, route }) {
  return (
    <motion.li variants={linkVariant}>
      <NavLink
        className={({ isActive }) =>
          `rounded-md py-2 px-4 capitalize text-gray-600 hover:bg-gray-500 hover:bg-opacity-10 dark:text-gray-400 dark:hover:bg-light dark:hover:bg-opacity-10 ${
            isActive ? 'font-medium text-black dark:text-white' : ''
          }`
        }
        to={`${route}`}>
        {navtext}
      </NavLink>
    </motion.li>
  );
}

export default NavItem;
