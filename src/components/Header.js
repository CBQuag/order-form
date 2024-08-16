import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import { useContext} from "react";
import OrderContext from "../context/OrderContext";
import order_data from "../context/order-data";


const Header = () => {
    
    const {shorten, setOrders, orders}=useContext(OrderContext)
    const handleClick = () => {
        setOrders(order_data)
    }
    
    return (
    <div className="header">    
            <div onClick={()=>handleClick()}>Logo</div>
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