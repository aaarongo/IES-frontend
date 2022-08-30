import React from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import styles from './HomePage.module.scss';

function HomePage() {

  return (
    <div>
      <div className={styles.section}>
        <SideMenu homeState="active" viewincomeState="" viewexpenseState="" />
        <div className={styles.content}>
          <div className={styles.header}>
            MONTHLY REPORT (MONTH)
          </div>
          <div className={styles.bar_chart}>
            <IncomeExpenseChart data={} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage