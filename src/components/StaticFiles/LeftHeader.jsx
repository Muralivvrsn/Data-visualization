import React,{useState} from 'react'
import Card from '../MainDashBoard/card'
import {Link} from "react-router-dom"
import {MdCottage} from 'react-icons/md'
const LeftHeader = () => {
  const div = <div className="w-1 h-12 bg-blue-500 absolute left-full mt-2 rounded"></div>
  const [active, setActive] = useState([1,0,0,0,0]);
  return (
    <div className='leftHeader fixed bottom-0 top-0 left-0'>
      <div className="logo">
        <h1>Horizon</h1>
      </div>
      <hr />
      <div className="sections grid gap-4 items-center w-full place-items-end	">
        <Link to="/" className="card w-10/12 cursor-pointer"  onClick={()=>setActive([1,0,0,0,0])}>
        <Card div={active[0]?div:false} name="Main Dashboard"  icon={<MdCottage className='w-2/4 h-2/4 mx-auto mt-4 '/>}/>
        </Link>
        <Link to="/marketplaces" className="card w-10/12 cursor-pointer" onClick={()=>setActive([0,1,0,0,0])}>
        <Card div={active[1]?div:false}name="Marketing"  icon={<MdCottage className='w-2/4 h-2/4 mx-auto mt-4'/>}/>
        </Link>
        <Link to="/datatables" className="card w-10/12 cursor-pointer" onClick={()=>setActive([0,0,1,0,0])}>
        <Card div={active[2]?div:false}name="Data Tables"  icon={<MdCottage className='w-2/4 h-2/4 mx-auto mt-4'/>} />
        </Link>
        <Link to="/profile" className="card w-10/12 cursor-pointer" onClick={()=>setActive([0,0,0,1,0])}>
        <Card div={active[3]?div:false}name="Profile"  icon={<MdCottage className='w-2/4 h-2/4 mx-auto mt-4'/>} />
        </Link>
        <Link to="/settings" className="card w-10/12 cursor-pointer" onClick={()=>setActive([0,0,0,0,1])}>
        <Card div={active[4]?div:false}name="Settings"  icon={<MdCottage className='w-2/4 h-2/4 mx-auto mt-4'/>}/>
        </Link>

      </div>
    </div>
  )
}

export default LeftHeader
