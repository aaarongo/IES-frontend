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
import { Chart as ChartJS } from "chart.js/auto";
import styles from './IncomeExpenseChart.module.scss';
import { style } from "@mui/system";
import ActivityTracker from "../ActivityTracker/ActivityTracker";

function IncomeExpenseChart({ vbData, dData, hbData }) {
  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.row_left}>
        <Card variant="outlined"><Bar data={vbData} /></Card>
          
        </div>
        <div className={styles.row_right}>
          <Doughnut data={dData} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.row_left}>
          <Bar data={hbData} options={{ indexAxis:"y" }} />
        </div>
        <div className={styles.row_right}>
          <ActivityTracker />
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenseChart;