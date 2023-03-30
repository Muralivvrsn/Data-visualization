import React from 'react'
import Card from './card'
import {IoDocuments,IoStatsChart} from "react-icons/io5"
import {FaCalendarDay} from 'react-icons/fa'
import {MdSignalCellularAlt} from "react-icons/md"
const details = () => {
  return (
    <div className='grid grid-cols-3 details'>
        <Card name="Earnings" data={320} icon={  <IoStatsChart  className='w-2/4 h-2/4 mx-auto mt-4'/>
}></Card>
        <Card name="Spend this month" data={642} icon={<IoDocuments className='w-2/4 h-2/4 mx-auto mt-4'/>}/>
        <Card name="Sales" data={574} icon={  <IoStatsChart  className='w-2/4 h-2/4 mx-auto mt-4'/>
}/>
        <Card name="Your Balance" data={1000} icon={  <IoStatsChart  className='w-2/4 h-2/4 mx-auto mt-4'/>
}/>
        <Card name="New Tasks" data={320} icon={  <FaCalendarDay  className='w-2/4 h-2/4 mx-auto mt-4'/>
}/>
        <Card name="Total Projects" data={320} icon={  <IoStatsChart  className='w-2/4 h-2/4 mx-auto mt-4'/>
}/>
    </div>
  )
}

export default details
