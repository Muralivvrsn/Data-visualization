import React,{useState} from 'react'
import Details from '../components/DashBoard/details'
import Monthly from '../components/Charts/Monthly'
import Weekly from '../components/Charts/Weekly'
import Daily from '../components/Charts/Daily'
import Piechart from '../components/Charts/Piechart'
import SmallCard from '../components/StaticFiles/smallCard'
import Table from '../components/DashBoard/Table'
import {FaEllipsisH,FaBookOpen} from 'react-icons/fa'
import {MdTrackChanges} from 'react-icons/md'
import Calender from 'react-calendar'
import Area from '../components/Charts/Area'
const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='main w-8/12'>
      <Details/>
      <div className="month-week  w-full flex relative">
        <div className="month relative">
        <SmallCard key={6} pic={true} text="This month"/>
          <div className="spent flex w-1/4 pl-2 ml-2">
            $24K
          </div>
          <small className='pl-3 ml-3'>Total spent</small>
          <Monthly/>
        </div>
        <div className="week relative">
        <SmallCard key={5} pic={false} text="Weekly revenue"/>
          <Weekly/>
        </div>
      </div>
      <div className="table-daily-pie rounded-lg">
        <div className="tablex rounded-lg relative">
          <SmallCard key={1} pic={false} text="Check Table" icon={<FaEllipsisH className='w-4 h-4 mx-1 my-0 text-blue-500'/>} />
          <Table/>
        </div>
        <div className="daily-pie flex">
        <div className="daily rounded-lg">
        <SmallCard key={3} pic={false} text="Daily Traffic" icon={<FaBookOpen className='w-4 h-4 mx-1 my-0 text-blue-500'/>} />
          <Daily/>
        </div>
        <div className="pie rounded-lg">
        <SmallCard key={4} pic={false} text="Your Pie Chart" icon={<MdTrackChanges className='w-4 h-4 mx-1 my-0 text-blue-500'/>}/>
          <Piechart/>
        </div>
        </div>
      </div>
      <div className="task-calender bg-transparent flex">
        <div className="task bg-transparent">
          <SmallCard key={2} pic={false} text="Monthly Area graph" />
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
