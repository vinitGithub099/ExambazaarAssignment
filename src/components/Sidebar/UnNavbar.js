import React, { useState } from 'react'
import SideBar from './SideBar'

const Un_Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSideBar = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <>
            {!openSidebar && <nav className={`p-4 md:p-8 w-full flex items-center justify-between shadow-md`}>
                <div className='und-img w-[124px] h-[29px]'></div>
                <div className='flex justify-evenly items-center'>
                    <div className="refer-and-earn shadow-md mr-[20px] md:mr-[45px] w-[115px] h-[34px]"></div>
                    <div className="w-[80px] h-[40px] flex items-center justify-center text-white font-[700px] bg-[#08BD80] rounded-[10px] hover:cursor-pointer" onClick={handleOpenSideBar}>Login</div>
                </div>
            </nav>}
            {openSidebar && <SideBar {...{openSidebar, handleOpenSideBar}}/>}
        </>
    )
}

export default Un_Navbar