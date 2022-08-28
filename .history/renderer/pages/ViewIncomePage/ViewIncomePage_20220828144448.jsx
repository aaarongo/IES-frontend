import SearchBar from 'material-ui-search-bar';
import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import Table from '../../components/Table/Table';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" viewexpenseState="" />
      <div className={styles.content}>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default ViewIncomePage