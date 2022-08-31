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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from './IncomeExpenseChart.module.scss';
import ActivityTracker from "../ActivityTracker/ActivityTracker";

function IncomeExpenseChart({ vbData, dData, hbData }) {
  
  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={[styles["box"], styles["box_transactions"]].join(" ")}>
          <div className={styles.box_header}>
              Transactions
            </div>
            <div className={styles.box_content}>
              <Bar data={hbData} 
              options={{ 
                indexAxis:"y",
                plugins:{ 
                  legend: { 
                    display: false 
                  },
                  datalabels: {
                    labels: {
                      font: {
                        color: "white",
                      },
                    },
                    display: true,
                    align: -50,
                    anchor: "start",
                    offset: 0
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      font: {
                        size: 20,
                        style: "normal",
                        weight: "100"
                      },
                      mirror: true,
                      labelOffset: -30
                    },
                    grid: {
                      drawBorder: false,
                      display: false
                    }
                  },
                  x: {
                    ticks: {
                      display: false
                    },
                    grid: {
                      drawBorder: false,
                      display: false
                    }
                  }
                }
              }} 
              plugins={[ChartDataLabels]}
              />
            </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_header}>
            Weekly Report
          </div>
          <div className={styles.box_content}>
            <Bar 
            data={vbData} 
            options={{
              plugins:{
                legend: {
                  position:"bottom", align:"center",
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                  }
                }
              }
            }}
            />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_header}>
            Monthly Overall
          </div>
          <div className={[styles["box_content"], styles["box_content_donut"]].join(" ")}>
            <Doughnut 
            data={dData} 
            options={{
              plugins:{
                legend: {
                  position:"left", align:"center",
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                  }
                }
              }
            }}/>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <ActivityTracker />
      </div>
    </div>
  )
}

export default IncomeExpenseChart;