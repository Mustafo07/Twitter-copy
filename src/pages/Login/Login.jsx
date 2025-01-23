import React, { useContext, useState } from 'react'
import Button from '../../components/Button'
import { TwitterIcon } from '../../assets/icons'
import Loading from '../../assets/images/loading.png'
import { Context } from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { users, setToken } = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      phoneNumberOrEmail: e.target.email.value,
      password: e.target.password.value
    }
    if (users.length > 0) {
      const findUser = users.some(item => item.email == (data.phoneNumberOrEmail || item.phone == data.phoneNumberOrEmail) && item.password || data.password)
      if(findUser) {
        setTimeout(() => toast.success("Welcome"), 500)
        setTimeout(() => {
          setIsLoading(false)
          setToken(data)
        })
      }
    }
    else {
      setTimeout(() => {
        toast.error("Users is not defined")
        setIsLoading(false)
      }, 1000)
    }
  }
  return (
    <div className='flex items-center justify-center mt-[60px]'>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <TwitterIcon width={70} height={55} />
        <h1 className='text-[42px] text-[#000000] leading-[49px] font-bold mt-[26px]'>Log in to Twitter</h1>
        <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-col space-y-[25px] mt-[36px] w-[450px]'>
          <input name={'email'} required className='focus:border-[#1DA1F2] w-full py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="text" placeholder='Phone number, email address' />
          <input name={'password'} required className='focus:border-[#1DA1F2] w-full py-[23px] px-[20px] border-[1px] border-[#00000033] outline-none rounded-[6px] text-[18px] text-[#00000099]' type="password" placeholder='Password' />
          <Button isLoading={isLoading} loadingImg={Loading} title={"Log In"} type={"submit"} />
        </form>
        <div className='flex items-center justify-between mt-10'>
          <a className='text-[18px] text-[#1DA1F2]' href="#">Forgot password?</a>
          <Link className='text-[18px] text-[#1DA1F2]' to={'./Register'}>Sign up to Twitter</Link>
        </div>
      </div>
    </div>
  )
}

export default Login