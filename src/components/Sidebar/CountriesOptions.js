import React  from 'react';


const CountriesOptions = ({ countriesList, handleCountryCode, handelImgCode }) => {

    return (
        <ul className='absolute bg-white left-[80px] top-[63px] border p-2 inline-block'>
            {
                countriesList.map(({ name, code, imgCode }) =>
                    <li
                        className='p-2 text-[14px] hover:cursor-pointer'
                        onClick={() => {
                            handleCountryCode(code);
                            handelImgCode(imgCode);
                        }}>
                        {name}
                    </li>
                )
            }
        </ul>
    )
}

export default CountriesOptions;