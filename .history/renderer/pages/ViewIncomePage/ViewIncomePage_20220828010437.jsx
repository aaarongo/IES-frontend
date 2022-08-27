import React from 'react';
import BigButton from '../../components/BigButton/BigButton';
import IncomeExpenseTable from '../../components/IncomeExpenseTable/IncomeExpenseTable';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" addincomeState="" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
        View Income Page
      </div>
    </div>
  )
}

export default ViewIncomePage