import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSun, BiMoon } from 'react-icons/bi';
import useSanity from '../../hooks/useSanity';

function Navbar() {
  const query = `*[_type == "author"]{image{ asset->{ url, _id,}}}`;
  const authorImage = useSanity(null, query);

  return (
    <header className='bg-dark container sticky top-0 z-20 mx-auto flex w-full max-w-4xl items-center justify-between px-8 py-6 md:px-12 lg:px-16'>
      <Link to='/'>
        <img
          className='h-12 w-12 rounded-full object-cover'
          src={authorImage && authorImage[0].image.asset.url}
          alt='profile'
        />
      </Link>

      <div className='ml-auto mr-2 rounded bg-white bg-opacity-10 p-2 md:hidden'>
        <BiMoon className='hidden' size={'1.5rem'} />
        <BiSun size={'1.5rem'} />
      </div>
      <nav className=''>
        <svg
          className='h-6 w-6 text-gray-900 dark:text-gray-100 md:hidden'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'>
          <path
            d='M2.5 7.5H17.5'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
          <path
            d='M2.5 12.5H17.5'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </svg>
        <ul className='fixed top-20 left-0 right-0 hidden translate-x-0 transform items-center gap-10 space-y-2 px-8 pb-4 md:visible md:relative md:top-0 md:flex md:gap-0 md:space-y-0 md:px-0 md:pb-0'>
          <li>
            <NavLink
              className={({
                isActive,
              }) => `rounded-md py-2 px-4 text-white opacity-50 hover:bg-white hover:bg-opacity-10
                ${isActive ? 'text-white opacity-100' : ''}
              `}
              to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({
                isActive,
              }) => `rounded-md py-2 px-4 text-white opacity-50 hover:bg-white hover:bg-opacity-10
                ${isActive ? 'text-white opacity-100' : ''}
              `}
              to='/blog'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `rounded-md py-2 px-4 text-white opacity-50 hover:bg-white hover:bg-opacity-10 ${
                  isActive ? 'text-white opacity-100' : ''
                }`
              }
              to='/work'>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `rounded-md py-2 px-4 text-white opacity-50 hover:bg-white hover:bg-opacity-10 ${
                  isActive ? 'text-white opacity-100' : ''
                }`
              }
              to='/about'>
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                `rounded-md py-2 hover:bg-white hover:bg-opacity-10 lg:px-4 ${
                  isActive ? 'font-medium text-white' : ''
                }`
              }
              to='/contact'>
              Contact
            </NavLink>
          </li> */}
          <li className='ml-2 hidden rounded bg-white bg-opacity-10 p-2 md:block'>
            {/* <BiMoon size={'1.5rem'} /> */}
            <BiSun size={'1.5rem'} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
