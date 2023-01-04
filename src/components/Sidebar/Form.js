import React, { useState } from 'react';
import PhoneInput from './PhoneInput';


const Form = ({ handleOpenSideBar }) => {
    const [openList, setOpenList] = useState(false);

    const handleOpenList = () => {
        setOpenList(!openList);
    }

    return (
        <div className='m-4 md:max-lg:m-6 lg:m-8 xl:m-12 transition-all duration-400'>
            <div className='mb-[47px] cross-btn w-[24px] h-[24px] hover:cursor-pointer' onClick={handleOpenSideBar}></div>
            <div className='mb-[47px] text-[24px] font-[400px]'>Login</div>
            <div className='mb-[47px] text-[14px] font-[400px] text-[#3C4852]'>or <span className='text-[#08BD80]'>create account</span></div>
            <div className='mb-[47px] w-[96px] h-0 border-b border-[#08BD80] border-dashed'></div>
            <div className='relative p-0'>
                <PhoneInput {...{ openList, handleOpenList }} />
            </div>
            <div className='mb-[47px] flex justify-between items-center'>
                <div className='py-2 font-[400px] text-[14px] px-6 text-[#7A8B94] bg-[#F4F6F8] tracking-wide hover:cursor-pointer'>
                    Login
                </div>
                <div className='py-2 font-[400px] text-[14px] text-[#3C4852] border-b border-dashed border-[#3C4852]'>
                    Continue with email
                </div>
            </div>
            <div className='mb-[47px] text-[#7A8B94] text-[12px]'>Having Trouble?</div>
            <div className='text-[#7A8B94] text-[12px]'>Please contact help@uncademy.com</div>
        </div>
    )
}

export default Form