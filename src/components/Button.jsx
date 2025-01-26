import React from 'react'

const Button = ({ title, extraclass, type, isLoading, loadingImg, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={`hover:opacity-[70%] py-[18px] bg-[#1DA1F2] text-[#fff] text-[18px] font-bold w-full rounded-[74px] ${extraclass}`}>
      {isLoading ?
      <img className='scale-[1.5] mx-auto' src={loadingImg} width={30} height={30}/>
      : title
    }
    </button>
  )
}

export default Button