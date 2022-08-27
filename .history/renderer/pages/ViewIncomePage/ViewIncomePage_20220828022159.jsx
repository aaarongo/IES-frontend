import SearchBar from 'material-ui-search-bar';
import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import IncomeTable from './IncomeTable/IncomeTable';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" viewexpenseState="" addexpenseState="" />
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