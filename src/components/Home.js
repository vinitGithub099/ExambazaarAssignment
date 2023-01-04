import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <ul className='p-4 inline-flex flex-col'>
            <li className="border m-2 bg-indigo-500 rounded text-white p-2 hover:border hover:border-black hover:cursor=pointer hover:bg-white hover:text-black">
                <Link index="true" to="/navbar">
                    Open Navbar
                </Link>
            </li>
            <li className="border m-2 bg-indigo-500 rounded text-white p-2 hover:border hover:border-black hover:cursor=pointer hover:bg-white hover:text-black">
                <Link index="true" to="/unacademy_navbar">
                    Open Unacdemy Navbar
                </Link>
            </li>
            <li className="border m-2 bg-indigo-500 rounded text-white p-2 hover:border hover:border-black hover:cursor=pointer hover:bg-white hover:text-black">
                <Link index="true" to="/sidebar">
                    Open Sidebar
                </Link>
            </li>
        </ul>
    )
}

export default Home;