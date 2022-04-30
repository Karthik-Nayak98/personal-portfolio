import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiSun, BiMoon } from 'react-icons/bi'
import useSanity from '../hooks/useSanity'
import NavItem from './navitem'
import { ThemeContext } from '../context/theme-context'

import { motion } from 'framer-motion'

function Navbar() {
  const navVariants = {
    open: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.075,
      },
      close: {
        opacity: 0,
      },
    },
  }

  const hamburgerVariant = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
    close: {
      opacity: 0,
      x: 10,
      transition: { duration: 0.2 },
    },
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsNavbarOpen(true)
      else setIsNavbarOpen(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const navItems = [
    { name: 'home', route: '/' },
    { name: 'blog', route: '/blog' },
    { name: 'work', route: '/work' },
    { name: 'about', route: '/about' },
  ]
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  const query = `*[_type == "author"]{image{ asset->{ url, _id,}}}`
  const authorImage = useSanity(null, query)

  return (
    <header className='dark:bg-dark container sticky top-0 z-20 mx-auto flex w-full max-w-4xl items-center justify-between bg-gray-200 px-8 py-6 md:px-12 lg:px-16'>
      <Link to='/'>
        <img
          className='h-12 w-12 rounded-full object-cover'
          src={authorImage && authorImage[0].image.asset.url}
          alt='profile'
        />
      </Link>

      <div
        onClick={toggleTheme}
        className='ml-auto cursor-pointer rounded bg-gray-200 p-2 dark:bg-white dark:bg-opacity-10 md:hidden'>
        <BiMoon className={`${theme === 'dark' ? 'hidden' : 'block'}`} size={20} />
        <BiSun className={`${theme === 'light' ? 'hidden' : 'block'}`} size={20} />
      </div>
      <nav className=''>
        {isNavbarOpen ? (
          <svg
            animate={isNavbarOpen ? 'open' : 'close'}
            variants={hamburgerVariant}
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className='h-6 w-6 text-gray-900 dark:text-gray-100 md:hidden'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
            shapeRendering='geometricPrecision'>
            <path d='M18 6L6 18'></path>
            <path d='M6 6l12 12'></path>
          </svg>
        ) : (
          <svg
            animate={!isNavbarOpen ? 'open' : 'close'}
            variants={hamburgerVariant}
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
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
        )}
        <motion.ul
          initial={false}
          animate={isNavbarOpen ? 'open' : 'close'}
          variants={navVariants}
          className={`dark:bg-dark fixed top-20 left-0 right-0 transform items-center gap-10 space-y-2 bg-gray-200 px-6 pb-4 ${
            isNavbarOpen ? 'block' : 'hidden'
          } md:relative md:top-0 md:flex md:gap-0 md:space-y-0 md:px-0 md:pb-0`}>
          {navItems.map((item) => (
            <NavItem key={item.name} navtext={item.name} route={item.route} />
          ))}
          <li
            onClick={toggleTheme}
            className='ml-2 hidden cursor-pointer rounded-md bg-gray-500 bg-opacity-10 p-2 dark:bg-white dark:bg-opacity-10 md:block'>
            <BiMoon
              className={`${theme === 'dark' ? 'hidden' : 'block'}`}
              size={20}
            />
            <BiSun
              className={`${theme === 'light' ? 'hidden' : 'block'}`}
              size={20}
            />
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}

export default Navbar
