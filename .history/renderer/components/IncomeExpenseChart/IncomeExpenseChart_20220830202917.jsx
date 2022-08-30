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

import React from 'react';
// import DonutChart from 'react-donut-chart';
import { Bar } from 'react-chartjs-2';

function IncomeExpenseChart() {
  const dataBar = {
    "labels": ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    "datasets": [
      {
        "label": 'My First dataset',
        "backgroundColor": '#EC932F',
        "borderColor": 'rgba(255,99,132,1)',
        "borderWidth": 1,
        "hoverBackgroundColor": 'rgba(255,99,132,0.4)',
        "hoverBorderColor": 'rgba(255,99,132,1)',
        "data": [65, 59, 80, 81, 56, 55, 40]
      },
      {
        "label": 'My First dataset 2',
        "backgroundColor": 'rgba(255,99,132,0.2)',
        "borderColor": 'rgba(255,99,132,1)',
        "borderWidth": 1,
        "hoverBackgroundColor": 'rgba(255,99,132,0.4)',
        "hoverBorderColor": 'rgba(255,99,132,1)',
        "data": [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div>
      {/* <DonutChart
        data={[
          {label: 'Income', value: 25, }, {label: 'Expense', value: 25, }, {label: 'Savings', value: 25, },
        ]}
        colors={['#35b000', '#e10000', '#a8763e']}
        strokeColor={['#35b000', '#e10000', '#a8763e']}
      />; */}
      <Bar 
        data={dataBar}
        width={100}
        height={50}
      />
    </div>
  )
}

export default IncomeExpenseChart