import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to='/'>
          <span>SocialApp</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className={styles.search}>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search...' />
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
