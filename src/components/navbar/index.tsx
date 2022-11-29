import clsx from 'clsx'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { ThemeContext } from '../../context/themeContext'
import styles from './Navbar.module.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

export const Navbar = () => {
  const { darkMode, toggle } = useContext(ThemeContext)
  const { user } = useContext(AuthContext)

  return (
    <div
      className={clsx(styles.navbar, {
        [styles.darkNavbar]: darkMode,
      })}
    >
      <div className={styles.left}>
        <Link to='/'>
          <span className={clsx(styles.logo, { [styles.darkLogo]: darkMode })}>
            SocialApp
          </span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode && (
          <WbSunnyOutlinedIcon
            className={styles.toggle}
            onClick={() => toggle()}
          />
        )}
        {!darkMode && (
          <DarkModeOutlinedIcon
            className={styles.toggle}
            onClick={() => toggle()}
          />
        )}
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
          <img src={user?.photo} alt='' />
          <span>{user?.name}</span>
        </div>
      </div>
    </div>
  )
}
