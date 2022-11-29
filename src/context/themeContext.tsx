import { useState, useEffect, createContext } from 'react'

interface IThemeContext {
  darkMode: boolean
  toggle: () => void
}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    Boolean(localStorage.getItem('dark-mode')) || false
  )

  const toggle = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem('dark-mode', String(darkMode))
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
