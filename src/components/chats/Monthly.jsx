import React,{useState} from 'react'
import Chart from "react-apexcharts";
import Weekly from './Weekly';
// import Calendar from 'react-calendar';
// import { MdChevronLeft,MdChevronRight } from 'react-icons/md'
const Monthly = ({options,series}) => {
    const [value, onChange] = useState(new Date());
  return (
    <div className="w-full flex">
      <div className="chart">
      <Chart type="line" width="100%" height="100%" options={options} series={series}/>
      </div>
      <Weekly options={options} series={series}/>
      </div>
  )
}

export default Monthly
