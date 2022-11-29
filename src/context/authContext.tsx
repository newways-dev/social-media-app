import { useState, useEffect, createContext } from 'react'

interface IAuthContext {
  user: User | null
  login: () => void
}

type User = {
  id: number
  name: string
  photo: string
} | null

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem('user') || String(null))
  )

  const login = () => {
    setUser({
      id: 1,
      name: 'Kate React',
      photo:
        'https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    })
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  )
}
