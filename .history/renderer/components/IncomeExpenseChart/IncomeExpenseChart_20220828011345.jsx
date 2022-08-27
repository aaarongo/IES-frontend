import React from 'react';
import Chart from 'react-apexcharts';
import styles from './IncomeExpenseChart.module.scss';

function IncomeExpenseChart() {

  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    colors: ['#0077b6', '#d1ac00']
  }
    
  const series = [
    {
      name: 'Income',
      data: [21, 35, 75, 51]
    },
    {
      name: 'Expense',
      data: [41, 79, 57, 47]
    }
  ]

  return (
    <div className={styles.container}>
      <Chart options={options} series={series} type="bar" />
    </div>
  )
}

export default IncomeExpenseTable