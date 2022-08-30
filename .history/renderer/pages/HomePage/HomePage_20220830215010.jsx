import React, { useState } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { chartData } from '../../data/IncomeExpenseData';

function HomePage() {
  const [userData, setuserData] = useState({
    labels: chartData.map((item) => item.label),
    dataSets: [{
        label: "Income and Expense Data",
        data: ieData.map((item) => item.income),
    }]
  });

  return (
    <div>
      <div className={styles.section}>
        <SideMenu homeState="active" viewincomeState="" viewexpenseState="" />
        <div className={styles.content}>
          <div className={styles.header}>
            MONTHLY REPORT (MONTH)
          </div>
          <div className={styles.bar_chart}>
            <IncomeExpenseChart chartData={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage