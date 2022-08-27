import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./ViewExpensePage.module.scss';

function ViewExpensePage() {
  return (
    <div className={styles.section}>
        <div className={styles.left}>
            <SideMenu homeState="" viewincomeState="" addincomeState="" viewexpenseState="active" addexpenseState="" /></div>
        <div className={styles.right}>
            View Expense Page
        </div>
    </div>
  )
}

export default ViewExpensePage