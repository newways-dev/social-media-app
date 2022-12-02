import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { Login } from '../types/inputs'

interface IAuthContext {
  user: User | null
  login: (inputs: Login) => void
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

  const login = async (inputs: Login) => {
    const response = await axios.post(
      'http://localhost:5000/api/auth/login',
      inputs,
      {
        withCredentials: true,
      }
    )
    setUser(response.data)
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
