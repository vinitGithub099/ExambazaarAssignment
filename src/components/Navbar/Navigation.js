import React, { useState } from 'react';
import CrossButton from './CrossButton';
import MenuIcon from './MenuIcon';
import SignIn from './SignIn';


const Navigation = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (

        <nav className="nav-bar">
            <div className="w-full shadow-md flex items-center justify-between px-4 py-4 min-[800px]:px-14">
                <div className="flex items-center justify-center">
                    {!open && <MenuIcon {...{ handleOpen }} />}
                    {open && <CrossButton {...{ handleOpen }} />}
                    <div className="paytm-img"></div>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-baseline justify-between">
                        <div className="mx-3 text-[17px] font-semibold">
                            Paytm for Consumer
                        </div>
                        <div className="mx-3 text-[17px] font-semibold">
                            Paytm for Business
                        </div>
                        <div className="mx-3 text-[17px] font-semibold">
                            Investor Relations
                        </div>
                        <div className="mx-3 text-[17px] font-semibold">
                            Company
                        </div>
                        <div className="mx-3 text-[17px] font-semibold">
                            Career
                        </div>
                    </div>
                </div>
                <div className={`${open ? `hidden` : 'block'} p-0 m-0`}>
                    <SignIn />
                </div>
            </div>
            {open &&
                <div className="w-full flex flex-col justify-between">
                    <div className="ml-4 py-6 text-[17px] font-semibold">
                        Investor Relations
                    </div>
                    <div className="ml-4 py-6 text-[17px] font-semibold">
                        Company
                    </div>
                    <div className="ml-4 py-6 text-[17px] font-semibold">
                        Career
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navigation
