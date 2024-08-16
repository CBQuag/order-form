import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
    <div className="header">    
            <div>Logo</div>
            <div className="menu">
                <NavLink    to=""
                            className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>
                                Home</NavLink>
                <NavLink    to="orders"
                            className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>
                                Orders</NavLink>
                {/* <NavLink    to="calendar"
                            className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>
                                Calendar</NavLink> */}
            </div>
    </div>
)
}

export default Header;