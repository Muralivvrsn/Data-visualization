import React from 'react'
import Chart from "react-apexcharts";
const Weekly = ({options,series}) => {
  return (
    <div>
      <Chart type="bar" options={options} series={series} width="100%" height="100%"/>
    </div>
  )
}

export default Weekly
