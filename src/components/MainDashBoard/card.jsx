import React from 'react'

const card = ({name,data,icon, div}) => {
  console.log(div)
  return (
    <div className={`items h-16 ${div || div===false?"w-1/4":"border-4 mb-4"} flex`}>
    <div className="icon w-1/4 h-full">{icon}</div>
    <div className={`text-center m-4`}>
    <div className="name">{name}</div>
    {data?<div className="data">{data}</div>:""}
    </div>
    {div?div:null}
    </div>
  )
}

export default card
