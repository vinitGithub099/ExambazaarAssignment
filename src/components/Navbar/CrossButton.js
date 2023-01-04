import React from 'react'

const CrossButton = ({ handleOpen }) => {
    return (
        <div className='md:hidden font-[20px] w-[18px] h-[20px] mr-6 max-md:mr-2  hover:cursor-pointer' onClick={handleOpen}>
            X
        </div>
    )
}

export default CrossButton