import React,{useState} from 'react'
import Chart from "react-apexcharts";
import Calendar from 'react-calendar'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Main = () => {
  const options = {
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
  const series =  [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
      name:"series-2",
      data:[40,20,30,10,20,40,10,49]
    }
  ]
  const [value, onChange] = useState(new Date());

  return (
    <div className='main w-8/12'>
      <div className="chart">
      <Chart type="line" width="100%" height="100%" options={options} series={series}/>
      </div>
      <div className="calender">
      <Calendar
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={"month"}
        />
      </div>
    </div>
  )
}

export default Main
