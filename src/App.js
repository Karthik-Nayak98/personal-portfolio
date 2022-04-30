import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/navbar'
import Home from './pages/home'
import Blog from './pages/blog'
import About from './pages/about'
import Work from './pages/work'
import Post from './pages/post'
import Error from './pages/error'
import ProjectDescription from './pages/project-description'

import ThemeProvider from './context/theme-context'

function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <main className='font-inter dark:bg-dark text-dark dark:text-light min-h-screen bg-gray-200 pb-12'>
        <Navbar />
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
  )
}

export default App
