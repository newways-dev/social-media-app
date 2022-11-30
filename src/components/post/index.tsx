import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/themeContext'
import { useContext, DetailedHTMLProps, HTMLAttributes } from 'react'
import { PostType } from '../../types/post'
import styles from './Post.module.scss'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

export interface PostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: PostType
}

export const Post = ({ post }: PostProps) => {
  const { darkMode } = useContext(ThemeContext)

  const liked = false

  return (
    <div className={clsx(styles.post, { [styles.darkPost]: darkMode })}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img src={post.userPhoto} alt='' />
            <div className={styles.details}>
              <Link to={`/profile/${post.userId}`}>
                <span className={styles.name}>{post.name}</span>
              </Link>
              <span className={styles.date}>1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className={styles.content}>
          <p>{post.description}</p>
          <img src={post.image} alt='' />
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className={styles.item}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className={styles.item}>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
      </div>
    </div>
  )
}
