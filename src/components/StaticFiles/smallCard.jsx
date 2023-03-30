import React from 'react'
import {IoDocuments,IoStatsChart} from 'react-icons/io5'
const smallCard = ({pic,text,no,icon}) => {
  return (
    <div className="flex justify-between">
          <div className={`monthly-details  ml-4 mt-4 flex justify-around ${pic?"bg-blue-100":""} p-2 rounded`}>
            {pic?<IoDocuments className='w-4 h-4 mx-1 my-0 text-blue-500 bg-transparent'/>:""}
            <h1 className='font-bold bg-transparent'>{text}</h1>
          </div>
            {no?"":<div className="mr-4 mt-4 graph">
              {icon?icon:<IoStatsChart className='w-4 h-4 mx-1 my-0 text-blue-500'/>}
              </div>}
          </div>
  )
}

export default smallCard
