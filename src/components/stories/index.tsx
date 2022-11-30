import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import useWindowSize from '../../hooks/useWindowSize'
import { StoryType } from '../../types/story'
import styles from './Stories.module.scss'

const data = [
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

export const Stories = () => {
  const [stories, setStories] = useState<StoryType[] | null>(null)
  const { user } = useContext(AuthContext)
  const windowSize = useWindowSize()

  useEffect(() => {
    setStories(data)
  }, [])

  useEffect(() => {
    if (stories && windowSize && windowSize > 1400) {
      setStories(data)
    }
    if (stories && windowSize && windowSize < 1400) {
      const sliced = stories?.slice(0, 2)
      setStories(sliced)
    }
  }, [windowSize, stories])

  return (
    <div className={styles.stories}>
      <div className={styles.story}>
        <img src={user?.photo} alt='' />
        <span>{user?.name}</span>
        <button>+</button>
      </div>
      {stories &&
        stories.map((story) => (
          <div key={story.id} className={styles.story}>
            <img src={story.img} alt='' />
            <span>{story.name}</span>
          </div>
        ))}
    </div>
  )
}
