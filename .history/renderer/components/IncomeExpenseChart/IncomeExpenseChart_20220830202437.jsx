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
import DonutChart from 'react-donut-chart';

function IncomeExpenseChart() {

  return (
    <div>
      <DonutChart
        data={[
          {label: 'Income', value: 25, }, {label: 'Expense', value: 25, }, {label: 'Savings', value: 25, },
        ]}
        colors={['#35b000', '#e10000', '#a8763e']}
      />;
    </div>
  )
}

export default IncomeExpenseChart