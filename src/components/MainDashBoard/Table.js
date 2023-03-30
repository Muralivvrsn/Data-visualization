import React from 'react'

const Table = () => {
    const data = [{Name:"Accounts",Progress:"40%",Quantity:34,Date:"Mar 4, 2023"},{Name:"Portfolio",Progress:"22.2%",Quantity:3467,Date:"Mar 7, 2022"},{Name:"Stock",Progress:"76.6%",Quantity:334,Date:"Feb 14, 2023"},{Name:"Market",Progress:"80%",Quantity:5634,Date:"May 14, 2022"},{Name:"Dress",Progress:"90%",Quantity:2234,Date:"Jan 4, 2023"},{Name:"Business",Progress:"10%",Quantity:1234,Date:"Jun 23, 2023"},
    {Name:"Accounts",Progress:"50%",Quantity:1134,Date:"Apr 12, 2022"}]
  return (
    <div className='data-table rounded-lg'>
    <table className='w-full'>
     
        <thead className=''>
        <tr className='row'>
            <th className='col font-bold border-double border-b-4 border-black-600 '>Name</th>
            <th className='col font-bold border-double border-b-4 border-black-600 '>Progress</th>
            <th className='col font-bold border-double border-b-4 border-black-600'>Quantity</th>
            <th className='col font-bold border-double border-b-4 border-black-600 '>Date</th>
        </tr>
        </thead>
        <tbody>
        {
            data.map((item)=>(
                <tr key={item.Quantity} className='row text-center'>
                    
                    <td className='col  text-left '><input type="checkbox" /><span>{item.Name}</span></td>
                    <td className='col  '>{item.Progress}</td>
                    <td className='col  '>{item.Quantity}</td>
                    <td className='col  '>{item.Date}</td>
                </tr>
            ))
        }
        </tbody>
       
    </table>
    </div>
  )
}

export default Table
