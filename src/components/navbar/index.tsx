import clsx from 'clsx'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/themeContext'
import styles from './Navbar.module.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

export const Navbar = () => {
  const { darkMode, toggle } = useContext(ThemeContext)

  return (
    <div
      className={clsx(styles.navbar, {
        [styles.dark]: darkMode,
      })}
    >
      <div className={styles.left}>
        <Link to='/'>
          <span className={clsx(styles.logo, { [styles.darkLogo]: darkMode })}>
            SocialApp
          </span>
        </Link>
        <HomeOutlinedIcon />
        <div className={styles.toggle} onClick={() => toggle()}>
          <DarkModeOutlinedIcon />
        </div>
        <GridViewOutlinedIcon />
        <div className={styles.search}>
          <SearchOutlinedIcon />
          <input
            className={clsx({ [styles.darkInput]: darkMode })}
            type='text'
            placeholder='Search...'
          />
        </div>
      </div>
      <div className={styles.right}>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className={styles.user}>
          <img
            src='https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <span>Kate React</span>
        </div>
      </div>
    </div>
  )
}
