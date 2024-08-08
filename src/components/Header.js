import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <div className="header">
    
        <NavLink    to=""
                    className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>
                        Home</NavLink>
        <NavLink    to="orders"
                    className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>
                        Orders</NavLink>
        <NavLink    to="calendar"
                    className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>
                        Calendar</NavLink>
        {/* {
            currentUser.username
            ? <>
                <a href="/profile">Profile</a>
                <button onClick={handleLogout} className="logout"> Log Out </button>
                </>
            : <a href="/sign-up">Sign Up</a>
            } */}
    </div>
)
}

export default Header;