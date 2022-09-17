import React from 'react';
import IncomeTable from '../../components/Income/IncomeTable/IncomeTable';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from './IncomePage.module.scss';

export default function IncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" viewexpenseState="" />
      <div className={styles.content}>
        <div className={styles.table}>
          <IncomeTable />
        </div>
      </div>
    </div>
  )
}