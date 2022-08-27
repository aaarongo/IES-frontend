import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./addExpensePage.module.scss';

function addExpensePage() {
  return (
    <div className={styles.section}>
        <div className={styles.left}>
            <SideMenu homeState="" viewincomeState="" addincomeState="" viewexpenseState="" addexpenseState="active" /></div>
        <div className={styles.right}>
            Add Expense Page
        </div>
    </div>
  )
}

export default AddExpensePage