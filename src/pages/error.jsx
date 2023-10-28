import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Container from '../components/container'
import useTitle from '../hooks/useTitle'

function Error() {
  const title = '404 - Karthik Nayak'
  const description = "This is the error page."

  useTitle(title, description)

  return (
    <Container title='Error 404'>
      <section className='px-8 md:px-12 lg:px-16'>
        <h2 className='my-4 text-lg font-medium md:text-xl'>
          Oops!! We can't find that page.
        </h2>
        <div className='text-gray-600 dark:text-gray-400'>
          The page you are looking for does not exist. You may have mistyped the
          address or the page may have moved. But you can click the button below to
          go back to the homepage.
          <Link to='/'>
            <button className='border-darkAccent dark:border-accent text-darkAccent dark:text-accent my-4 mx-auto flex items-center gap-1 rounded-full border-2 px-4 py-1 text-sm font-medium capitalize'>
              Go back
              <FiArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </Container>
  )
}

export default Error
