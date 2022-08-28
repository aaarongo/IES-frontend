import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import IncomeExpenseTable from '../../components/Table/IncomeExpenseTable';
import styles from'./ViewExpensePage.module.scss';

function ViewExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active"/>
      <div className={styles.content}>
        <IncomeExpenseTable type="Income"/>
      </div>
    </div>
  )
}

export default ViewExpensePage