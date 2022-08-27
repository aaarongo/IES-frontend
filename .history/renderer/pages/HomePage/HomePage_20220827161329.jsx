import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.section}>
        <SideMenu />
        <div className={styles.main}>
            HomePage
        </div>
    </div>
  )
}

export default HomePage