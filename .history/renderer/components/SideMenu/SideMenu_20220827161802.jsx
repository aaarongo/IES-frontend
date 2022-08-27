import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu() {
  return (
    <div className={styles.container}>
        <div>Home</div>
        <div>Income</div>
        <div>Expense</div>
    </div>
  )
}

export default SideMenu