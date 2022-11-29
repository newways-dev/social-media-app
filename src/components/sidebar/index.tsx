import styles from './Sidebar.module.scss'

import Friends from '../../assets/images/1.png'
import Groups from '../../assets/images/2.png'
import Market from '../../assets/images/3.png'
import Watch from '../../assets/images/4.png'
import Memories from '../../assets/images/5.png'
import Events from '../../assets/images/6.png'
import Gaming from '../../assets/images/7.png'
import Gallery from '../../assets/images/8.png'
import Videos from '../../assets/images/9.png'
import Messages from '../../assets/images/10.png'
import Tutorials from '../../assets/images/11.png'
import Courses from '../../assets/images/12.png'
import Fund from '../../assets/images/13.png'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.user}>
            <img
              src='https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              alt=''
            />
            <span>Kate React</span>
          </div>
          <div className={styles.item}>
            <img src={Friends} alt='' />
            <span>Friends</span>
          </div>
          <div className={styles.item}>
            <img src={Groups} alt='' />
            <span>Groups</span>
          </div>
          <div className={styles.item}>
            <img src={Market} alt='' />
            <span>Marketplace</span>
          </div>
          <div className={styles.item}>
            <img src={Watch} alt='' />
            <span>Watch</span>
          </div>
          <div className={styles.item}>
            <img src={Memories} alt='' />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <span>Your shortcuts</span>
          <div className={styles.item}>
            <img src={Events} alt='' />
            <span>Events</span>
          </div>
          <div className={styles.item}>
            <img src={Gaming} alt='' />
            <span>Gaming</span>
          </div>
          <div className={styles.item}>
            <img src={Gallery} alt='' />
            <span>Gallery</span>
          </div>
          <div className={styles.item}>
            <img src={Videos} alt='' />
            <span>Videos</span>
          </div>
          <div className={styles.item}>
            <img src={Messages} alt='' />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <span>Others</span>
          <div className={styles.item}>
            <img src={Fund} alt='' />
            <span>Fundraiser</span>
          </div>
          <div className={styles.item}>
            <img src={Tutorials} alt='' />
            <span>Tutorials</span>
          </div>
          <div className={styles.item}>
            <img src={Courses} alt='' />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}
