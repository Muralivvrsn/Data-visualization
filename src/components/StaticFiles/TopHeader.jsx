import React from 'react'
import {IoNotificationsOutline, IoMoonOutline, IoAlertCircleOutline} from 'react-icons/io5'
import {IoPersonCircleOutline} from 'react-icons/io5'
const TopHeader = ({text}) => {
  return (
    <div className='topHeader fixed w-8/12 p-16'>
     <div className="asection absolute w-2/4 items-center h-3/4 p-2">
      <h2 className='bg-transparent'>pages/{text}</h2>
      <h1 className='font-black text-2xl bg-transparent'>{text}</h1>
     </div>
     <div className="psection flex absolute w-2/4 bg-white-500 rounded-full pr-8 items-center top-2/4 h-3/4 left-3/4">
      
      <div className="flex items-center w-3/4 pl-4 bg-transparent">   
          <div className="relative w-full bg-transparent">
              <div className="absolute bg-transparent inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 bg-transparent dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="rounded-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11/12 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
          </div>
      </div>

      <div className="icons flex bg-transparent">
        <IoNotificationsOutline className='w-5 h-5 mx-1 bg-transparent'/>
        <IoMoonOutline className='w-5 h-5 mx-1 bg-transparent'/>
        <IoAlertCircleOutline className='w-5 h-5 mx-1 bg-transparent'/>
      </div>
      <div className="profile flex bg-transparent">
        <IoPersonCircleOutline className='w-14 h-14 rounded-full bg-transparent'/>
      </div>
     </div>
    </div>
  )
}

export default TopHeader
