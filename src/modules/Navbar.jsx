import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DotsIcon, TwitterIcon } from '../assets/icons';
import { NavbarList } from '../hooks/useRoute';
import Button from '../components/Button';
import AvatarIcon from '../assets/images/avatar.png'
import { Modal } from '../components/Modal';
import loadingImg from '../assets/images/loading.png'
import { Context } from '../context/Context';

const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info")) || {}
  const {setToken} = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)
  const [logOutModal, setLogOutModal] = useState(false)
  const [activeIcon, setActiveIcon] = useState("Home");


  function handleLogOut() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      location.replace("/")
      setToken(null)
    }, 1000)
  }

  return (
    <div className='w-[22%] h-[100vh] border-r-[1px] border-[#D8D8D8] overflow-y-auto pt-[31px]'>
      <TwitterIcon alt='Logo' width={50} height={35} />
      <nav className='space-y-[37px] mt-[39px]'>
        {NavbarList.map(item => (
          <NavLink onClick={(e) => setActiveIcon(e.target.textContent)} className='flex items-center gap-[20px]' key={item.id} to={item.path}>
            {activeIcon == item.title ? item.activeIcon : item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <Button title={"Tweet"} type={"button"} extraclass={"!w-[230px] !mt-[30px] !py-[15px]"} />
      <div onClick={() => setLogOutModal(true)} className='flex relative items-center gap-[10px] mt-[60px]'>
        <img src={AvatarIcon} alt="" width={50} height={50} />
        <div className='flex flex-col'>
          <strong className='font-semibold text-[16px] mb-[2px]'>{userInfo?.name}</strong>
          <p className='text-[16px] opacity-[60%]'>{userInfo.email ? userInfo.email : "-"}</p>
        </div>
        <button className='absolute top-0 bottom-0 my-auto right-[15px]'><DotsIcon /></button>
      </div>
      <Modal openModal={logOutModal} setOpenModal={setLogOutModal}>
        <h2 className='text-[25px] font-bold text-center'>Do you want to log out?</h2>
        <div className='flex absolute bottom-5 px-5 gap-5 w-full right-0 items-center justify-between'>
          <Button onClick={() => setLogOutModal(false)} title='Cancel' />
          <Button onClick={handleLogOut} loadingImg={loadingImg} isLoading={isLoading} extraclass={['bg-red-500']} title='Log out' />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
