import { Link } from 'react-router-dom'
import styles from './Register.module.scss'

export const Register = () => {
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
            <input placeholder='Name' type='text' />
            <input placeholder='Username' type='text' />
            <input placeholder='Email' type='email' />
            <input placeholder='Password' type='password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
