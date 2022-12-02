import axios from 'axios'
import { AxiosError } from 'axios'
import { ChangeEvent, useContext, useState, SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { Login as LoginInputs } from '../../types/inputs'
import styles from './Login.module.scss'

export const Login = () => {
  const { login } = useContext(AuthContext)
  const [error, setError] = useState<string | boolean>(false)
  const [inputs, setInputs] = useState<LoginInputs>({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault()

    try {
      await login(inputs)
      navigate('/')
      setError(false)
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data)
      }
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            assumenda saepe earum dolores possimus aliquid nisi iste distinctio
            vitae vel at beatae, error nesciunt.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          <form>
            <input
              onChange={handleChange}
              name='username'
              placeholder='Username'
              type='text'
            />
            <input
              onChange={handleChange}
              name='password'
              placeholder='Password'
              type='password'
            />
            {error && error}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
