import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.section}>
        <div className={styles.left}><SideMenu homeState="active" incomeState="not" expenseState="no" /></div>
        <div className={styles.right}>
            Welcome username!
        </div>
    </div>
  )
}

export default HomePage