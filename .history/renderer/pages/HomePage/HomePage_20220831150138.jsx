import React, { useState } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { UserData } from '../../data/IncomeExpenseData';

function HomePage() {
  //vertical bar graph data
  const [vbData, setbData] = useState({
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
        backgroundColor: ["rgb(255, 208, 1)",],
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
        backgroundColor: ["#35b000","#e10000","rgb(255, 208, 1)"],
      },
    ],
  });
  //horizontal bar data
  const [hbData, sethbData] = useState({
    labels: UserData.horizontalData.map((data) => data.label),
    datasets: [
      {
        label: "Income",
        data: UserData.horizontalData.map((data) => data.data),
        backgroundColor: ["rgb(0, 170, 180)","#e10000",],
      },
    ],
  });
  //get motnh
  const current = new Date();
  const currentDate = `${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
      <div className={styles.section}>
        <SideMenu homeState="active" viewincomeState="" viewexpenseState="" />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.text}>Monthly Report for {currentDate}</div>
          </div>
          <div className={styles.charts}>
            <IncomeExpenseChart vbData={vbData} dData={dData} hbData={hbData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage