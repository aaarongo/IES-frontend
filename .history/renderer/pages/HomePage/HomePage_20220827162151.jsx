import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.section}>
        <div className={styles.left}><SideMenu /></div>
        <div className={styles.right}>
            HomePage
        </div>
    </div>
  )
}

export default HomePage