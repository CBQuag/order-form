import React from "react";
import './Order.css'

const Order = (props) => {
    return (
        <div className="order-box">
            <h1>{props.item}</h1>
            <p>Category: {props.category}</p>
            <p>Date: {Date(props.date)}</p>
            <div className="quan">
                <p>Quantity: {props.quantity}</p>
                <p>Price: {props.price}</p>
            </div>
        </div>
)
}

export default Order;