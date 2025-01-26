import React, { useState } from 'react'
import Reaction from './Reaction'
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { GoUpload } from 'react-icons/go'
import { DotsIcon } from '../assets/icons'

const PostItem = ({ item }) => {
    const [likeClick, setLikeClick] = useState(false)
    return (
        <li className='border-b-[2px] relative flex items-start gap-[15px] border-slate-400 p-5'>
            <img src={item.avatarImg} alt="Avatar Icon" width={60} height={60} />
            <div className='w-full'>
                <div className='flex items-center gap-[5px] mb-[5px]'>
                    <strong className='font-bold text-[20px]'>{item.username}</strong>
                    <span className='text-[16px] opacity-60'>{item.nickname}</span>
                </div>
                <p className='text-[18px]'>{item.postContent}</p>
                {item.postImg && <img className='mt-[15px]' src={item.postImg} alt="" width={589} height={453} />}
                <div className='flex items-center mt-[22px] gap-[100px]'>
                    <Reaction icon={<FaRegComment size={"17px"} />} count={item.commentCount} />
                    <Reaction icon={<BiRepost size={"24px"} />} count={item.replyCount} />
                    <Reaction active={`${likeClick ? "text-red-500" : ""}`} onClick={() => setLikeClick(!likeClick)} icon={likeClick ? <FaHeart color='red' size={"17px"}/> : <FaRegHeart size={"17px"}/>} count={likeClick ? item.likeCount + 1 : item.likeCount} />
                    <Reaction icon={<GoUpload size={"17px"} />} count={item.forwardCount} />
                    <Reaction icon={<FaRegComment size={"17px"} />} count={item.statisticsCount} />
                </div>
            </div>
            <button className='absolute top-5 right-5'><DotsIcon/></button>
        </li>
    )
}

export default PostItem