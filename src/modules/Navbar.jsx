import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TwitterIcon } from '../assets/icons';
import { NavbarList } from '../hooks/useRoute';
import Button from '../components/Button';

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");

  return (
    <div className='w-[22%] h-[100vh] border-r-[1px] border-[#D8D8D8] overflow-y-auto pt-[31px]'>
      <TwitterIcon alt='Logo' width={50} height={43} />
      <nav className='space-y-[37px] mt-[39px]'>
        {NavbarList.map(item => (
          <NavLink onClick={(e) => setActiveIcon(e.target.textContent)} className='flex items-center gap-[20px]' key={item.id} to={item.path}>
            {activeIcon == item.title ? item.activeIcon : item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <Button title={"Tweet"} type={"button"} extraclass={"!w-[230px] !mt-[30px]"}/>
    </div>
  );
};

export default Navbar;
