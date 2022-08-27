import React from 'react';
import BigButton from '../../components/BigButton/BigButton';
import IncomeExpenseTable from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import IncomeTable from './IncomeTable/IncomeTable';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" addincomeState="" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
        View Income Page
        <IncomeTable />
      </div>
    </div>
  )
}

export default ViewIncomePage