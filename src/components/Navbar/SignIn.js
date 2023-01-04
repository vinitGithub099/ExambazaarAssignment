import React from 'react'

const SignIn = () => {
    return (
        <div className="flex items-center justify-between bg-[#00BAF2] rounded-[25px] px-1.5 md:py-[2px] md:px-[9px] w-[84px] h-[34px] md:w-[107px] md:h-[38px]">
            <div className="font-semibold text-[10px] md:text-[15px] tracking-1 text-white">
                Sign In
            </div>
            <div className="relative bg-[#002970] w-[34px] h-[34px] flex justify-center rounded-[50%] overflow-hidden">
                <div className='bg-white h-[15.87px] w-[15.87px] rounded-[50%] absolute left-[9.07px] top-[6.8px]'></div>
                <div className='bg-white h-[25.84px] w-[25.84px] rounded-[50%] absolute left-[4.08px] top-[20.4px]'></div>
            </div>
        </div>
    )
}

export default SignIn;