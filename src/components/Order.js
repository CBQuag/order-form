import React from "react";
import './Order.css'
import { useContext } from "react";
import OrderContext from "../context/OrderContext";

const Order = (props) => {
    const {shorten}=useContext(OrderContext)
    
    const converted = new Date(props.date)
    
    const style = {backgroundColor: props.order_id%2==0?'#dbdbdb':'#ffffff'}
    
    return (
        <div className="order-box" style={style}>
            <p>{shorten(props.item,20)}</p>
            <p>{props.category}</p>
            <p>{`${converted.getMonth()+1}/${converted.getDate()}/${converted.getFullYear()}`}</p>
            <p>{props.quantity}</p>
            <p>{`$${props.price}`}</p>
        </div>
)
}

export default Order;