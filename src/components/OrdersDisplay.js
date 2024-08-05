import { React, useContext, useEffect, useState } from "react";
import order_data from "../context/order-data";
import OrderContext from "../context/OrderContext";
import Order from "./Order";

const OrdersDisplay = () => {
    
    const { orders, setOrders, shorten } = useContext(OrderContext);
    
    useEffect(() => {
        localStorage.setItem('order-data', JSON.stringify(orders))
    },[orders])

    return (
        <div>
            <div className="order-box">
                <h3>Item Name</h3>
                <h3>Category</h3>
                <h3>Date</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
            </div>
            {orders[0] ? orders.map((odata, index) => (
                <Order
                    key={index}
                    item={odata.item}
                    order_id={odata.order_id}
                    date={odata.date}
                    category={odata.category}
                    quantity={odata.quantity}
                    price={odata.price} />
            )):'null'}
        </div>
    )
}

export default OrdersDisplay;