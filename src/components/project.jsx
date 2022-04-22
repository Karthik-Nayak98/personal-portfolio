import React from 'react'
import { Link } from 'react-router-dom'
import projectImage from '../assets/project.png'

function Project() {
  return (
    <Link to='/work/project1'>
      <article className='transfrom cursor-pointer overflow-hidden rounded shadow-lg duration-150 hover:scale-105'>
        <img className='w-full' src={projectImage} alt='Sunset in the mountains' />
        <div className='bg-black bg-opacity-30 px-6 py-4'>
          <div className='mb-2 text-xl font-bold text-white'>Project 1</div>
          <p className='text-sm text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
      </article>
    </Link>
  )
}

export default Project
