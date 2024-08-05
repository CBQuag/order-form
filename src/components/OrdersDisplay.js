import { React, useContext, useEffect, useState } from "react";
import order_data from "../context/order-data";
import OrderContext from "../context/OrderContext";
import Order from "./Order";

const OrdersDisplay = () => {
    
    const { orders, setOrders} = useContext(OrderContext);
    
    // useEffect(() => {
        
    // }, [orders])
    
    return (
        <div>
            <h1>{orders.length}</h1>
            {orders[0] ? orders.map(odata => (
                <Order
                    key={orders.indexOf(odata)}
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