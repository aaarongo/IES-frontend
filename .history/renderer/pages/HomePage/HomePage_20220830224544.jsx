import React, { useState } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { UserData } from '../../data/IncomeExpenseData'

function HomePage() {
  // const [bData, setbData] = useState({
  //   labels: UserData.map((data) => data.label),
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: UserData.map((data) => data.income),
  //       backgroundColor: ["#35b000",],
  //     },
  //     {
  //       label: "Expense",
  //       data: UserData.map((data) => data.income),
  //       backgroundColor: ["#e10000",],
  //     },
  //     {
  //       label: "Savings",
  //       data: UserData.map((data) => data.savings),
  //       backgroundColor: ["#a8763e",],
  //     },
  //   ],
  // });
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
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
            <IncomeExpenseChart chartData={userData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage