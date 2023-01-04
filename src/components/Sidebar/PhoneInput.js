import React, { useState } from 'react';
import CountriesOptions from './CountriesOptions';


const countriesList = [
    {
        name: 'United States',
        code: '+1',
        imgCode: 'US',
    },
    {
        name: 'India',
        code: '+91',
        imgCode: 'IN',
    },
    {
        name: 'Australia',
        code: '+61',
        imgCode: 'AU',
    },
    {
        name: '	Belgium',
        code: '+32',
        imgCode: 'BE',
    },
    {
        name: 'Cuba',
        code: '+53',
        imgCode: 'CU',
    },
    {
        name: '	United Arab Emirates',
        code: '+971',
        imgCode: 'AE',
    },
]

const PhoneInput = ({ openList, handleOpenList }) => {

    const [countryCode, setCountryCode] = useState("+91");
    const [imgCode, setImgCode] = useState('IN');

    const handleCountryCode = (code) => {
        setCountryCode(code);
        handleOpenList();
    }

    const handelImgCode = (iCode) => {
        setImgCode(iCode);
    }
    return (
        <>
            <div className='mb-[47px] rounded-[5px] flex shadow-md p-2 py-4 sm:p-4'>
                <div className='max-[460px]:w-[30%] w-[20%] flex items-center justify-between'>
                    <img className='w-[24px] h-[24px]' src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${imgCode}.svg`} alt="" />
                    <div className='w-[40px] text-[14px]'>{countryCode}</div>
                    <div className='py-2 dropdown-arrow w-[9px] h-[5px] hover:cursor-pointer' onClick={handleOpenList}></div>
                </div>
                <input className='ml-2 max-[460px]:w-[70%] w-[80%] text-[#3C4852] font-[400px] text-16px outline-none' type="tel" placeholder='Enter your mobile number' />
            </div>
            {openList &&
                <CountriesOptions {...{ countriesList, handleCountryCode, handelImgCode }} />}
        </>
    )
}

export default PhoneInput