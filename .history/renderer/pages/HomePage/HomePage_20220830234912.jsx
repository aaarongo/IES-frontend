import React, { useState } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { UserData } from '../../data/IncomeExpenseData';

function HomePage() {
  //bar graph data
  const [bData, setbData] = useState({
    labels: UserData.barData.map((data) => data.label),
    datasets: [
      {
        label: "Income",
        data: UserData.barData.map((data) => data.income),
        backgroundColor: ["#35b000",],
      },
      {
        label: "Expense",
        data: UserData.barData.map((data) => data.expense),
        backgroundColor: ["#e10000",],
      },
      {
        label: "Savings",
        data: UserData.barData.map((data) => data.savings),
        backgroundColor: ["#a8763e",],
      },
    ],
  });
  //donut data
  const [dData, setdData] = useState({
    labels: UserData.donutData.map((data) => data.label),
    datasets: [
      {
        label: "Monthly",
        data: UserData.donutData.map((data) => data.data),
        backgroundColor: ["#0000",],["ffff"],
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
            <IncomeExpenseChart bData={bData} dData={dData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage