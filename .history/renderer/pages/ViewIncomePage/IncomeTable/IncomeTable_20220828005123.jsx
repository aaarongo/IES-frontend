import React from 'react';
import Chart from 'react-apexcharts';

function IncomeTable() {

  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    colors: ['#FB8833', '#17A8F5']
  }
    
  const series = [
    {
      name: 'Sales',
      data: [21, 35, 75, 51]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47]
    }
  ]

  return (
    <div>
      <Chart options={options} series={series} type="bar" />
    </div>
  )
}

export default IncomeTable