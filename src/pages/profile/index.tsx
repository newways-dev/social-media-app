import clsx from 'clsx'
import { useContext } from 'react'
import { Posts } from '../../components'
import { ThemeContext } from '../../context/themeContext'
import styles from './Profile.module.scss'

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'

export const Profile = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={clsx(styles.profile, { [styles.darkProfile]: darkMode })}>
      <div className={styles.images}>
        <img
          className={styles.cover}
          src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
          alt=''
        />
        <img
          className={styles.userPhoto}
          src='https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
      </div>
      <div className={styles.container}>
        <div
          className={clsx(styles.userInfo, { [styles.darkUserInfo]: darkMode })}
        >
          <div className={styles.left}>
            <a
              className={clsx(styles.social, { [styles.darkSocial]: darkMode })}
              href='http://facebook.com'
            >
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a
              className={clsx(styles.social, { [styles.darkSocial]: darkMode })}
              href='http://facebook.com'
            >
              <InstagramIcon fontSize='large' />
            </a>
            <a
              className={clsx(styles.social, { [styles.darkSocial]: darkMode })}
              href='http://facebook.com'
            >
              <TwitterIcon fontSize='large' />
            </a>
            <a
              className={clsx(styles.social, { [styles.darkSocial]: darkMode })}
              href='http://facebook.com'
            >
              <LinkedInIcon fontSize='large' />
            </a>
            <a
              className={clsx(styles.social, { [styles.darkSocial]: darkMode })}
              href='http://facebook.com'
            >
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className={styles.center}>
            <span>Kate React</span>
            <div className={styles.info}>
              <div
                className={clsx(styles.item, { [styles.darkItem]: darkMode })}
              >
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div
                className={clsx(styles.item, { [styles.darkItem]: darkMode })}
              >
                <LanguageIcon />
                <span>kate.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className={styles.right}>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}
