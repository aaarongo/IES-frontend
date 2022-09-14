import React, { useState, useEffect } from 'react';
import IncomeExpenseChart from '../../components/IncomeExpenseChart/IncomeExpenseChart';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import { UserData } from '../../data/IncomeExpenseData';
import Rest from '../../rest/Rest.tsx';
import Toast from '../../components/Toast/Toast';

const INITIAL_URL = "http://localhost:8080/api/v1";

function HomePage() {

  const rest = new Rest();
  
  const [verticalBarGraphData, setVerticalBarGraphData] = useState({
    labels: [],
    datasets: [],
  });

  const getVerticalBarGraphDataOnSuccess = (data) => {
    setVerticalBarGraphData({
      labels: data.map((item) => item.expenseMonth),
      datasets: [
        {
          label: "Income",
          data: data.map((data) => data.monthlyIncome),
          backgroundColor: ["#35b000"],
        },
        {
          label: "Expense",
          data: data.map((data) => data.monthlyExpenses),
          backgroundColor: ["#e10000"],
        },
      ],
    });
  }
  
  const getVerticalBarGraphData = () => {
    rest.getPost(
      `${INITIAL_URL}/expense/vertical-bar-graph`,
      null,
      getVerticalBarGraphDataOnSuccess
    );
  }

  const [donutGraphData, setDonutGraphData] = useState({
    labels: [],
    datasets: [],
  });

  const getDonutGraphDataOnSuccess = (data) => {
    setDonutGraphData({
      labels: data.map((item) => item.donutLabel),
      datasets: [
        {
          label: "Monthly",
          data: data.map((item) => item.donutData),
          backgroundColor: ["#35b000", "#e10000", "rgb(255, 208, 1)"],
        },
      ],
    });
  }

  const getDonutGraphData = () => {
    rest.getPost(
      `${INITIAL_URL}/expense/donut-graph`,
      null,
      getDonutGraphDataOnSuccess
    );
  }

  useEffect(() =>{
    getVerticalBarGraphData();
    getDonutGraphData();
  }, [])






  //donut data

  //horizontal bar data
  // const [hbData, sethbData] = useState({
  //   labels: UserData.horizontalData.map((data) => data.label),
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: UserData.horizontalData.map((data) => data.data),
  //       backgroundColor: ["rgb(0, 170, 180)","#e10000",],
  //       barThickness: 4, 
  //     }
  //   ]
  // });
  //get motnh
  const current = new Date();
  const currentDate = `${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
      <Toast />
      <div className={styles.section}>
        <SideMenu homeState="active" viewincomeState="" viewexpenseState="" />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.text}>Monthly Report for {currentDate}</div>
          </div>
          <div className={styles.charts}>
            <IncomeExpenseChart vbData={verticalBarGraphData} dData={donutGraphData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage