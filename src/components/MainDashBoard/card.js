import React from 'react'

const card = ({name,data,icon,money}) => {
  return (
    <div className={`items h-16 flex `}>
    <div className="icon w-1/4 h-full bg-transparent">{icon}</div>
    <div className="text-center">
    <div className="name">{name}</div>
    <div className="data text-start font-bold">{(money?"$":"")}{data}</div>
    </div>
    </div>
  )
}

export default card
