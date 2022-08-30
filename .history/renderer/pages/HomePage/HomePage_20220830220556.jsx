import React, { useState } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { UserData } from '../../data/IncomeExpenseData';

function HomePage() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.label),
    datasets: [
      {
        label: "Income",
        data: UserData.map((data) => data.income),
        backgroundColor: ["#35b000",],
      },
      {
        label: "Expense",
        data: UserData.map((data) => data.income),
        backgroundColor: ["#e10000",],
      },
      {
        label: "Savings",
        data: UserData.map((data) => data.savings),
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
          <div className={styles.bar_chart}>
            <IncomeExpenseChart chartData={userData} />
          </div>
          <div className={styles.donut_chart}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage