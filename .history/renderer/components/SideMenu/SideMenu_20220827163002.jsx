import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu() {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <a className={homeState} href="../HomePage/HomePage">Home</a>
            <a className={homeState} href="../HomePage/HomePage">Income</a>
            <a className={homeState} href="../HomePage/HomePage">Expense</a>
        </div>
    </div>
  )
}

export default SideMenu