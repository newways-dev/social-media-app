import styles from './Login.module.scss'

export const Login = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            assumenda saepe earum dolores possimus aliquid nisi iste distinctio
            vitae vel at beatae, error nesciunt.
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          <form>
            <input type='text' />
            <input type='password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
