import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({ navtext, route }) {
  return (
    <li>
      <NavLink
        className={({
          isActive,
        }) => `rounded-md py-2 px-4 capitalize text-white opacity-50 hover:bg-white hover:bg-opacity-10
                ${isActive ? 'text-white opacity-100' : ''}
              `}
        to={`${route}`}>
        {navtext}
      </NavLink>
    </li>
  )
}

export default NavItem
