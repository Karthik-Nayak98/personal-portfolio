import React from 'react'
import { urlFor } from '../utils/client'
import useSanity from '../hooks/useSanity'
import Resume from '../assets/Karthik_Nayak_Resume.pdf'
import Loader from '../components/loader'
import SocialIcon from '../components/social-icon'

import { motion } from 'framer-motion'

const Home = () => {
  const query1 = '*[_type == "author"][0]{name, title, image {asset ->{url}}}'
  const query2 = '*[_type == "social"]{name, social_url, image {asset->{ url }}}'

  const sanityData = useSanity(null, query1)
  const socialData = useSanity(null, query2)

  if (!sanityData || !socialData) return <Loader />

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        y: -100,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
      }}
      className='dark:bg-dark container mx-auto max-w-4xl bg-gray-200 py-4 px-2 md:px-24 md:py-14 lg:px-16'>
      <section className='text-dark dark:text-light flex flex-col items-center justify-center gap-5 md:flex-row md:justify-around md:gap-12 lg:justify-between lg:gap-14'>
        <section className='w-9/12 md:w-3/5'>
          <article className='flex flex-col items-center justify-center md:items-start'>
            <span className='md:text-normal text-sm font-medium uppercase tracking-wide md:tracking-wider lg:text-lg'>
              Hi There! I'm
            </span>
            <span className='text-2xl font-semibold uppercase tracking-wide sm:text-4xl md:tracking-wider lg:text-5xl'>
              {sanityData.name}
            </span>
            <h2 className='text-darkAccent dark:text-accent text-md py-1 font-medium md:text-xl lg:text-2xl'>
              {sanityData.title}
            </h2>
          </article>
          <article className='my-4 flex flex-col justify-start gap-5 md:my-8 md:flex-row md:items-center lg:gap-10'>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={Resume}
              target='_blank'
              className='border-darkAccent dark:border-accent text-darkAccent dark:text-accent self-center rounded-full border-[2px] px-4 py-1 text-center text-xs capitalize tracking-wide sm:text-sm md:border-2 md:px-6 md:py-2 md:tracking-widest lg:w-28'
              rel='noopener noreferrer'>
              Resume
            </motion.a>
            <ul className='inline-flex items-center justify-center gap-3 md:justify-start'>
              {socialData.map((item) => (
                <SocialIcon
                  key={item.name}
                  name={item.name}
                  url={item.social_url}
                  icon={item.image.asset.url}
                />
              ))}
            </ul>
          </article>
        </section>
        <figure className='-order-1 w-40 rounded-full bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] md:order-1 md:w-56 lg:mr-20 lg:w-48'>
          <img
            className='h-40 w-40 rounded-full object-cover p-1 shadow-md md:h-56 md:w-56 lg:h-48 lg:w-48'
            src={urlFor(sanityData.image)}
            alt={sanityData.name}
          />
        </figure>
      </section>
    </motion.div>
  )
}

export default Home
