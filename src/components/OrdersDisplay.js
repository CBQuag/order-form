import { React, useContext, useEffect, useState } from "react";
import order_data from "../context/order-data";
import OrderContext from "../context/OrderContext";
import Order from "./Order";

const OrdersDisplay = () => {
    
    const { orders } = useContext(OrderContext);
    
    return (
        <div>
            {orders[0] ? orders.map(order_data => (
                <Order
                    key={orders.indexOf(order_data)}
                    item={order_data.item}
                    order_id={order_data.order_id}
                    date={order_data.date}
                    category={order_data.category}
                    quantity={order_data.quantity}
                    price={order_data.price} />
            )):null}
        </div>
)
}


export default OrdersDisplay;