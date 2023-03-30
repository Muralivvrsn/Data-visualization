import React,{useState} from 'react'
import Details from './MainDashBoard/details'
import Monthly from './chats/Monthly'
import Weekly from './chats/Weekly'
import Daily from './chats/Daily'
import Piechart from './chats/Piechart'
import SmallCard from './StaticFiles/smallCard'
import Table from './MainDashBoard/Table'
import {FaEllipsisH,FaBookOpen} from 'react-icons/fa'
import {MdTrackChanges} from 'react-icons/md'
import Calender from 'react-calendar'
import Area from './chats/Area'
const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='main w-8/12'>
      <Details/>
      <div className="month-week  w-full flex">
        <div className="month ">
        <SmallCard pic={true} text="This month"/>
          <div className="spent flex w-1/4 pl-2 ml-2">
            $24K
          </div>
          <small className='pl-3 ml-3'>Total spent</small>
          <Monthly/>
        </div>
        <div className="week ">
        <SmallCard pic={false} text="Weekly revenue"/>
          <Weekly/>
        </div>
      </div>
      <div className="table-daily-pie flex rounded-lg">
        <div className="tablex rounded-lg">
          <SmallCard pic={false} text="Check Table" icon={<FaEllipsisH className='w-4 h-4 mx-1 my-0 text-blue-500'/>} />
          <Table/>
        </div>
        <div className="daily rounded-lg">
        <SmallCard pic={false} text="Daily Traffic" icon={<FaBookOpen className='w-4 h-4 mx-1 my-0 text-blue-500'/>} />
          <Daily/>
        </div>
        <div className="pie rounded-lg">
        <SmallCard pic={false} text="Your Pie Chart" icon={<MdTrackChanges className='w-4 h-4 mx-1 my-0 text-blue-500'/>}/>
          <Piechart/>
        </div>
      </div>
      <div className="task-calender bg-transparent flex">
        <div className="task bg-transparent">
          <SmallCard pic={false} text="Monthly Area graph" />
          <Area/>
        </div>
        <div className="calender bg-transparent">
          <Calender onChange={onChange} value={value} view="month" className="cln"/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
