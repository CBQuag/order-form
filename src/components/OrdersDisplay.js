import { React, useContext, useEffect, useState } from "react";
import order_data from "../context/order-data";
import OrderContext from "../context/OrderContext";
import Order from "./Order";

const OrdersDisplay = () => {
    
    const { orders, setOrders, shorten, daySelection, setDayView, datediff } = useContext(OrderContext);
    
    const [daysList, setDaysList] = useState(orders);
    const checkDay = (prev) => {
        const current = datediff(prev.date, daySelection) == 0;
        return current
    }
    
   
    useEffect(() => {
        const newList = [...orders].filter(checkDay)
        if (daySelection) {
            setDaysList(newList)
        } else {
            setDaysList(orders)
        }
    },[daySelection,orders])

    return (
        <div className="whole-order-box">
            <div className="order-box">
                <h3>Item Name</h3>
                <h3>Category</h3>
                <h3>Date</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
                <h3></h3>
            </div>
            {daysList[0] ? daysList
                .map((odata, index) => (
                    <Order
                    style={{ backgroundColor: index % 2 == 0 ? '#dbdbdb' : '#ffffff' }}
                    key={index}
                    item={odata.item}
                    order_id={odata.order_id}
                    date={odata.date}
                    category={odata.category}
                    quantity={odata.quantity}
                    price={odata.price} />
                
                )) : <h1 className="no-data">{daySelection?'No orders for selected day':'No orders'}</h1>}
        </div>
    )
}

export default OrdersDisplay;