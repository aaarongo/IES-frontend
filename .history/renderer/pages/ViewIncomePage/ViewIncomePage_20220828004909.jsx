import React from 'react';
import BigButton from '../../components/BigButton/BigButton';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './ViewIncomePage.module.scss';
import IncomeTable from './ViewIncomeTable/IncomeTable';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="active" addincomeState="" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
        <IncomeTable />
      </div>
    </div>
  )
}

export default ViewIncomePage