import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import styles from './Stories.module.scss'

export const Stories = () => {
  const { user } = useContext(AuthContext)

  const strories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
  ]

  return (
    <div className={styles.stories}>
      <div className={styles.story}>
        <img src={user?.photo} alt='' />
        <span>{user?.name}</span>
        <button>+</button>
      </div>
      {strories.map((story) => (
        <div key={story.id} className={styles.story}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}
