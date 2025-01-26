import React, { useState } from 'react'
import { DataIcon, GifIcon, ImagesIcon, SmileIcon, StarIcon, StatisIcon } from '../../assets/icons'
import AvatarIcon from '../../assets/images/avatar.png'
import Button from '../../components/Button'
import LoadingImg from '../../assets/images/loading.png'
import PostItem from '../../components/PostItem'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [postImg, setPostImg] = useState(null)
  const userInfo = JSON.parse(localStorage.getItem("user_info"))
  const [postList, setPostList] = useState(JSON.parse(localStorage.getItem("posts_list")) || [
    {
      id: 1,
      avatarImg: "",
      username: "Designsta",
      nikname: "@inner · 25m",
      postContent: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: 10,
      replyCount: 1,
      isLiked: false,
      likeCount: 8,
      forwardCount: 0,
      statisticsCount: 0,
      postImg: null
    }
  ])

  function handleAddPost(e) {
    e.preventDefault()
    const data = {
      id: postList.length ? postList[postList.length - 1].id + 1 : 1,
      avatarImg: AvatarIcon,
      username: userInfo.name,
      nickname: userInfo.email ? userInfo.email : "-",
      postContent: e.target.postContent.value,
      commentCount: 0,
      replyCount: 0,
      isLiked: false,
      likeCount: 0,
      forwardCount: 0,
      statistics: 0,
      postImg: postImg
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setPostList([...postList, data])
    }, 1000)
  }


  localStorage.setItem("posts_list", JSON.stringify(postList))
  return (
    <div>
      <div className='p-5 border-b-[1px] border-[#D8D8D8] flex items-center justify-between'>
        <h2 className='font-bold text-[24px]'>Home</h2>
        <button><StarIcon /></button>
      </div>
      <form onSubmit={handleAddPost} className='relative p-5 border-b-[2px] border-[#D8D8D8]'>
        <div className='flex items-start gap-[15px]'>
          <img src={AvatarIcon} width={60} height={60} alt="" />
          <div className='w-[80%]'>
            <input className='w-full border-none font-semibold text-[22px] p-0 outline-none' name='postContent' type="text" placeholder='What’s happening' />
            <div className='flex items-center gap-[20px] mt-[32px]'>
              <label>
                <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' />
                <ImagesIcon />
              </label>
              <GifIcon />
              <StatisIcon />
              <SmileIcon />
              <DataIcon />
            </div>
          </div>
        </div>
        <Button isLoading={isLoading} loadingImg={LoadingImg} type={"submit"} extraclass={"!w-[108px] absolute right-5 bottom-[5px]"} title={"Tweet"} />
      </form>
      <ul>
        {postList.map(item => <PostItem key={item.id} item={item} />)}
      </ul>
    </div>
  )
}

export default Home