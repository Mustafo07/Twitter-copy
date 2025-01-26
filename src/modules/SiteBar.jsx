import React from 'react'
import { DotsIcon, SettingsIcon } from '../assets/icons'
import Button from '../components/Button'

const SiteBar = () => {
  return (
    <div className='w-[28%] p-5 overflow-y-auto'>
      <input className='w-[323px] py-[15px] px-[20px] rounded-[31px] bg-[#EFF3F4] text-[18px] text-[#5C6C79]' type="text" placeholder='Search Twitter' />
      <div className='w-[353px] px-[15px] py-[25px] rounded-[10px] bg-[#F7F9F9] mt-[20px]'>
        <div className='flex items-center justify-between  mb-[20px]'>
          <h2 className='text-[24px] text-[#000000] font-bold'>Trends for you</h2>
          <SettingsIcon />
        </div>
        <div className='flex flex-col space-y-5'>
        <div className='flex items-start justify-between'>
          <div>
            <strong className='text-[16px] text-[#393B41] opacity-[60%] font-bold'>Trending in Germany</strong>
            <h3 className='text-[20px] text-[#000000]'>Revolution</h3>
            <p className='text-[16px] text-[#393B41] opacity-[60%]'>50.4K Tweets</p>
          </div>
          <div className='mt-[17px]'>
            <DotsIcon />
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div>
            <strong className='text-[16px] text-[#393B41] opacity-[60%] font-bold'>Trending in Germany</strong>
            <h3 className='text-[20px] text-[#000000]'>Revolution</h3>
            <p className='text-[16px] text-[#393B41] opacity-[60%]'>50.4K Tweets</p>
          </div>
          <div className='mt-[17px]'>
            <DotsIcon />
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div>
            <strong className='text-[16px] text-[#393B41] opacity-[60%] font-bold'>Trending in Germany</strong>
            <h3 className='text-[20px] text-[#000000]'>Revolution</h3>
            <p className='text-[16px] text-[#393B41] opacity-[60%]'>50.4K Tweets</p>
          </div>
          <div className='mt-[17px]'>
            <DotsIcon />
          </div>
        </div>
        <a className='text-[18px] text-[#1DA1F2] mt-[20px]' href="">Show more</a>
        </div>

      </div>
      <div className='w-[353px] px-[15px] py-[20px] rounded-[10px] bg-[#F7F9F9] mt-[20px]'>
         <h2 className='text-[24px] text-[#000000] font-bold'>You might like</h2>
         <div className='flex items-center justify-between mt-[25px]'>
          <div className='w-[60px] h-[60px] rounded-full border-[1px] border-[#5C6C79]'></div>
          <div>
            <strong className='text-[18px] text-[#000000]'>Mushtariy</strong>
            <p className='text-[18px] text-[#000000] opacity-[60%]'>@Mushtar565266</p>
          </div>
          <Button extraclass={"bg-[#000000] w-[92px] py-[10px]"} title={"Follow"}/>
         </div>
         <div className='flex items-center justify-between mt-[25px]'>
          <div className='w-[60px] h-[60px] rounded-full border-[1px] border-[#5C6C79]'></div>
          <div>
            <strong className='text-[18px] text-[#000000]'>Mushtariy</strong>
            <p className='text-[18px] text-[#000000] opacity-[60%]'>@Mushtar565266</p>
          </div>
          <Button extraclass={"bg-[#000000] w-[92px] py-[10px]"} title={"Follow"}/>
         </div>
      </div>

    </div>
  )
}

export default SiteBar