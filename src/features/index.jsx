import React from 'react'
import Navbar from '../modules/Navbar'
import SiteBar from '../modules/SiteBar'

const DahboardLayout = ({ children }) => {
    return (
        <div className='px-10 flex'>
            <Navbar />
            <div className='w-[50%]'>
                {children}
            </div>
            <SiteBar />
        </div>
    )
}

export default DahboardLayout