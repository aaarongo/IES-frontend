import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import ExpenseTable from './ExpenseTable/ExpenseTable';
import styles from'./ViewExpensePage.module.scss';

function ViewExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="accept"/>
      <div className={styles.content}>
        <ExpenseTable />
      </div>
    </div>
  )
}

export default ViewExpensePage