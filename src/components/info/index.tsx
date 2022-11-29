import styles from './Info.module.scss'

export const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <div className={styles.item}>
          <span>Suggestions For You</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <span>Alice Doe</span>
            </div>
            <div className={styles.buttons}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <span>Alice Doe</span>
            </div>
            <div className={styles.buttons}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span>Latest Activities</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <p>
                <span>Alice Doe</span> changed her cover image
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <p>
                <span>Alice Doe</span> changed her cover image
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <p>
                <span>Alice Doe</span> changed her cover image
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.item}>
          <span>Online Friends</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <div className={styles.online} />
              <span>Alice Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <div className={styles.online} />
              <span>Alice Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <div className={styles.online} />
              <span>Alice Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <div className={styles.online} />
              <span>Alice Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img
                src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
              <div className={styles.online} />
              <span>Alice Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
