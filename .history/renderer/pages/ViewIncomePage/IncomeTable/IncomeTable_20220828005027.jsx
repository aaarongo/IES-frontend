import React from 'react';
import Chart from 'react-apexcharts';

function IncomeTable() {

  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    colors: ['#FB8833', '#17A8F5']
  }
    
  const series = [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ]

  return (
    <div>
      <Chart options={options} series={series} type="bar" />
    </div>
  )
}

export default IncomeTable