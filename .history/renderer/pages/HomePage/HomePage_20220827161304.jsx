import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.section}>
        <SideMenu />
        <div className={styles.pag}>
            HomePage
        </div>
    </div>
  )
}

export default HomePage