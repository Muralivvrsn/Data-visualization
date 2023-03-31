import React from 'react'
import Chart from 'react-apexcharts'
import {candleStickOptions,candleStickSeries} from '../chartData'
const CandleStick = () => {
  return (
    <Chart type="candlestick" width="100%" height="100%" options={candleStickOptions} series={candleStickSeries}/>
  )
}

export default CandleStick
