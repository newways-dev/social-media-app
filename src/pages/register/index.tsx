import axios from 'axios'
import { AxiosError } from 'axios'
import { Link } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import styles from './Register.module.scss'
import { Register as RegisterInputs } from '../../types/inputs'

export const Register = () => {
  const [error, setError] = useState<boolean | string>(false)
  const [inputs, setInputs] = useState<RegisterInputs>({
    username: '',
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleRegister = async (event: SyntheticEvent) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:5000/api/auth/register', inputs)
      setError(false)
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data)
      }
    }
  }

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Social Media App.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            assumenda saepe earum dolores possimus aliquid nisi iste distinctio
            vitae vel at beatae, error nesciunt.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1>Register</h1>
          <form>
            <input
              placeholder='Name'
              type='text'
              name='name'
              onChange={handleChange}
            />
            <input
              placeholder='Username'
              type='text'
              name='username'
              onChange={handleChange}
            />
            <input
              placeholder='Email'
              type='email'
              name='email'
              onChange={handleChange}
            />
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
