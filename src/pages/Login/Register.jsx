import React, { useContext, useState } from 'react'
import { TwitterIcon } from '../../assets/icons'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../../assets/images/loading.png'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";



const Register = () => {
  const { setUsers, users } = useContext(Context)

  const navite = useNavigate()
  const [useEmail, setUseEmail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handleRegisterSubmit(e) {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      email: useEmail ? e.target.email.value : null
    }
    setUsers([...users, data])
    setTimeout(() => {toast.success("Users is created")}, 500)
    setTimeout(() => {
      e.target.reset()
      setIsLoading(false)
      navite(-1)
    }, 1000)
  }

  return (
    <div className='mx-auto w-[750px] py-[35px] px-[40px]'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='w-[70px] mx-auto text-center'>
        <TwitterIcon width={50} height={55} />
      </div>
      <h1 className='font-bold text-[30px] text-[#000000] mt-[43px]'>Create an account</h1>
      <form onSubmit={handleRegisterSubmit} className='w-[670px] mt-[35px]'>
        <div className='flex flex-col space-y-6'>
          <input name={'name'} required className='w-full py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="text" placeholder='Name' />
          <input name={'phone'} required className='w-full py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="number" placeholder='Phone number' />
          <input name={'password'} required className='w-full py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="pass" placeholder='Password' />
          {useEmail && <input name={'email'} required className='w-full py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="email" placeholder='Email' />}
        </div>
        <div className='flex items-center justify-between  mt-[30px]'>
          <p onClick={() => setUseEmail(!useEmail)} className='text-[18px] text-[#1DA1F2]'>{useEmail ? "Hide email" : "Use email"}</p>
          <Link className='text-[18px] text-[#1DA1F2]' to={'/'}>Log In</Link>
        </div>
        <h2 className='font-bold text-[18px] text-[#000000] mt-[40px]'>Date of birth</h2>
        <p className='text-[] text-[#000000] opacity-[60%] leading-[24px] mt-[10px]'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        <div className='flex items-center gap-[20px] mt-[20px]'>
          <input className='w-[50%] py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="month" placeholder='Month' />
          <input className='w-[32%] py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="week" placeholder='Day' />
          <input className='w-[32%] py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="date" placeholder='Year' />
        </div>
        <Button isLoading={isLoading} loadingImg={Loading} type={"submit"} extraclass={"mt-[64px]"} title={"Next"} />
      </form>
    </div>
  )
}

export default Register 