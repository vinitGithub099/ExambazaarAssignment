import React from 'react'

const MenuIcon = ({handleOpen}) => {
    return (
        <div className="md:hidden mr-6 max-md:mr-2 hover:cursor-pointer" onClick={handleOpen}>
            <div className="menu-horizontal-line"></div>
            <div className="menu-horizontal-line"></div>
            <div className="menu-horizontal-line"></div>
        </div>
    )
}

export default MenuIcon