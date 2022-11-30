import clsx from 'clsx'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { ThemeContext } from '../../context/themeContext'
import { CommentType } from '../../types/comment'
import styles from './Comments.module.scss'

export const Comments = () => {
  const { user } = useContext(AuthContext)
  const { darkMode } = useContext(ThemeContext)

  const comments: CommentType[] = [
    {
      id: 1,
      name: 'Alice Doe',
      userPhoto:
        'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem officiis obcaecati nesciunt esse dolor eius saepe, ullam quisquam dignissimos. Quia quod corrupti, cumque officiis, omnis corporis odio nobis voluptatum, error magni voluptatem ad quasi',
    },
  ]

  return (
    <div className={styles.comments}>
      <div className={styles.write}>
        <img src={user?.photo} alt='' />
        <input
          className={clsx(styles.input, { [styles.darkInput]: darkMode })}
          type='text'
          placeholder='Write a comment'
        />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <img src={comment.userPhoto} alt='' />
          <div className={styles.info}>
            <span>{comment.name}</span>
            <p className={clsx(styles.text, { [styles.darkText]: darkMode })}>
              {comment.text}
            </p>
          </div>
          <span className={clsx(styles.date, { [styles.darkDate]: darkMode })}>
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  )
}
