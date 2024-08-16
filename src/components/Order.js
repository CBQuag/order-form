import React from "react";
import './Order.css'
import { useContext } from "react";
import OrderContext from "../context/OrderContext";

const Order = (props) => {
    const {shorten, setOrders, orders}=useContext(OrderContext)
    
    const converted = new Date(props.date)
    
   
    
    const handleDelete = (id) => {

        const newOrder = [...orders].filter((item) => item.order_id !== id);
        setOrders(newOrder);
    }
    
    return (
        <div className="order-box" style={props.style}>
            <p>{shorten(props.item,20)}</p>
            <p>{props.category}</p>
            <p>{`${converted.getMonth()+1}/${converted.getDate()}/${converted.getFullYear()}`}</p>
            <p>{props.quantity}</p>
            <p>{`$${props.price}`}</p>
            <button onClick={()=>handleDelete(props.order_id)}>X</button>
        </div>
)
}

export default Order;