import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import IncomeExpenseTable from '../../components/Table/IncomeExpenseTable';
import styles from'./ExpensePage.module.scss';

function ViewExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active"/>
      <div className={styles.content}>
        <IncomeExpenseTable type="Expense"/>
      </div>
    </div>
  )
}

export default ViewExpensePage