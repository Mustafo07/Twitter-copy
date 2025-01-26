import React from 'react'

const Reaction = ({icon, count, onClick, active}) => {
  return (
    <div onClick={onClick} className={`cursor-pointer flex text-[#536471] ${active} items-center gap-[10px]`}>
        {icon}
        <span className='text-[16px]'>{count !== 0 ? count : "" }</span>
    </div>
  )
}

export default Reaction