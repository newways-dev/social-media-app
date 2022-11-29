import clsx from 'clsx'
import { useContext } from 'react'
import { Posts, Stories } from '../../components'
import { ThemeContext } from '../../context/themeContext'
import styles from './Home.module.scss'

export const Home = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={clsx(styles.home, { [styles.darkHome]: darkMode })}>
      <Stories />
      <Posts />
    </div>
  )
}
