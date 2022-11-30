import { Post } from '../post'
import styles from './Posts.module.scss'

export const Posts = () => {
  const posts = [
    {
      id: 1,
      name: 'Kate React',
      userId: 1,
      userPhoto:
        'https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image:
        'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consectetur.',
    },
    {
      id: 2,
      name: 'Kate React',
      userId: 1,
      userPhoto:
        'https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image:
        'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, recusandae! Voluptate quisquam, assumenda ex necessitatibus voluptatibus deserunt animi repudiandae possimus.',
    },
  ]

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
