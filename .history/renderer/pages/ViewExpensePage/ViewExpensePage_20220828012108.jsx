import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./ViewExpensePage.module.scss';

function ViewExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="accept" addexpenseState="" />
      <div className={styles.content}>
        View Expense Page
      </div>
    </div>
  )
}

export default ViewExpensePage