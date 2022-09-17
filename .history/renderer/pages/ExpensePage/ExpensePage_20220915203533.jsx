import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import IncomeExpenseTable from '../../components/Table/IncomeExpenseTable';
import styles from'./ExpensePage.module.scss';

import Rest from '../../../rest/Rest'

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function ExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active"/>
      <div className={styles.content}>
      </div>
    </div>
  )
}