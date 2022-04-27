import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({ navtext, route }) {
  return (
    <li>
      <NavLink
        className={({
          isActive,
        }) => `dark:hover:bg-light rounded-md py-2 px-4 capitalize text-gray-600 hover:bg-gray-500  hover:bg-opacity-10 dark:hover:bg-opacity-10
                ${isActive ? 'dark:text-light font-medium text-black' : ''}
              `}
        to={`${route}`}>
        {navtext}
      </NavLink>
    </li>
  )
}

export default NavItem
