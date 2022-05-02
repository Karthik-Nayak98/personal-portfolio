import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import ThemeProvider from './context/theme-context'
import Loader from './components/loader'

const Navbar = lazy(() => import('./components/navbar'))
const Home = lazy(() => import('./pages/home'))
const Blog = lazy(() => import('./pages/blog'))
const About = lazy(() => import('./pages/about'))
const Work = lazy(() => import('./pages/work'))
const Post = lazy(() => import('./pages/post'))
const Error = lazy(() => import('./pages/error'))
const ProjectDescription = lazy(() => import('./pages/project-description'))

function App() {
  const location = useLocation()

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider>
        <main className='font-inter dark:bg-dark text-dark dark:text-light min-h-screen bg-gray-200 pb-12'>
          <Navbar path={location} />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:slug' element={<Post />} />
              <Route path='/work' element={<Work />} />
              <Route path='/work/:project' element={<ProjectDescription />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </AnimatePresence>
        </main>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
