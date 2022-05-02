import React, { createContext, useEffect, useState } from 'react'

const getInitialTheme = (_) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') return storedPrefs
  }

  // Checking the theme in the OS.
  const userMedia = window.matchMedia('(prefers-color-scheme:dark)')
  if (userMedia.matches) return 'dark'

  // Set the default theme as 'dark'
  return 'dark'
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (theme) => {
    // Root element of the document (html tag)
    const root = window.document.documentElement

    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }

  if (initialTheme) rawSetTheme(initialTheme)

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
