import React from 'react';
import IncomeTable from '../../components/Income/IncomeTable/IncomeTable';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" viewexpenseState="" />
      <div className={styles.content}>
        <div className={styles.table}>
          {/* <IncomeExpenseTable type="Income" /> */}
          <IncomeTable />
        </div>
      </div>
    </div>
  )
}

export default ViewIncomePage