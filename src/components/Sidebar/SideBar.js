import React from 'react';
import Form from './Form';

const SideBar = ({handleOpenSideBar}) => {
    return (
        <div className='w-full h-[100vh] flex flex-row'>
            <div className="lg:w-[45%] h-full bg-[#7E7E7E]">
                <div className="w-[124px] h-[29px] und-img max-md:w-full"></div>
            </div>
            <div className="w-full lg:w-[55%] h-full">
                <Form {...{handleOpenSideBar}}/>
            </div>
        </div>
    )
}

export default SideBar;