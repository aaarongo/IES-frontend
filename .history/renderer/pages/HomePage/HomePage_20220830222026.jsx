import React, { useState } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { UserData } from '../../data/IncomeExpenseData.json';

function HomePage() {
  const [barData, setbarData] = useState({
    labels: UserData.barData.map((data) => data.label),
    datasets: [
      {
        label: "Income",
        data: Data.barData.map((data) => data.income),
        backgroundColor: ["#35b000",],
      },
      {
        label: "Expense",
        data: Data.barData.map((data) => data.income),
        backgroundColor: ["#e10000",],
      },
      {
        label: "Savings",
        data: Data.barData.map((data) => data.savings),
        backgroundColor: ["#a8763e",],
      },
    ],
  });

  return (
    <div>
      <div className={styles.section}>
        <SideMenu homeState="active" viewincomeState="" viewexpenseState="" />
        <div className={styles.content}>
          <div className={styles.header}>
          </div>
          <div className={styles.charts}>
            <IncomeExpenseChart chartData={barData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage