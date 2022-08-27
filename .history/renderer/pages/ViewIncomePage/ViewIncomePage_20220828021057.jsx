import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import IncomeTable from './IncomeTable/IncomeTable';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>

        <div className={styles.header}>
          Income
        </div>
        <div className={styles.table}>
          <IncomeTable />
        </div>
      </div>
    </div>
  )
}

export default ViewIncomePage