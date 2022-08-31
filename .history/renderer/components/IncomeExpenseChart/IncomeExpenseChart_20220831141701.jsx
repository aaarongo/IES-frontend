// import React from 'react';
// import Chart from 'react-apexcharts';
// import styles from './IncomeExpenseChart.module.scss';

// function IncomeExpenseChart() {

//   const options = {
//     chart: {
//       id: 'apexchart-example'
//     },
//     xaxis: {
//       categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
//     },
//     colors: ['#35b000', '#e10000']
//   }
    
//   const series = [
//     {
//       name: 'Income',
//       data: [21, 35, 75, 51]
//     },
//     {
//       name: 'Expense',
//       data: [41, 79, 57, 47]
//     }
//   ]

//   return (
//     <div className={styles.container}>
//       <Chart options={options} series={series} type="bar" />
//     </div>
//   )
// }

// export default IncomeExpenseChart

import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import styles from './IncomeExpenseChart.module.scss';
import ActivityTracker from "../ActivityTracker/ActivityTracker";

function IncomeExpenseChart({ vbData, dData, hbData }) {
  
  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.box}>
          <div className={styles.box_header}>
            Weekly Report
          </div>
          <div className={styles.box_content}>
            <Bar data={vbData} />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_header}>
            Weekly Report
          </div>
          <div className={styles.box_content}>
            <Doughnut data={dData} width=2"00/>
          </div>
        </div>
        <div className={styles.box}>
          <Bar data={hbData} options={{ indexAxis:"y" }} />
        </div>
      </div>
      <div className={styles.row}>
        <ActivityTracker />
      </div>
    </div>
  )
}

export default IncomeExpenseChart;