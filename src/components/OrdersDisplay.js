import { React, useContext, useEffect, useState } from "react";
import order_data from "../context/order-data";
import OrderContext from "../context/OrderContext";
import Order from "./Order";

const OrdersDisplay = () => {
    
    const { orders, setOrders,
        shorten,
        daySelection, setDayView,
        monthSelection, setMonthView,
        datediff } = useContext(OrderContext);
    
    const [daysList, setDaysList] = useState(orders);
    
    const checkDay = (prev) => {
        const current = datediff(prev.date, daySelection) == 0;
        return current
    }
    const checkMonth = (prev) => {
        const date=new Date(prev.date)
        return date.getMonth() == monthSelection;
    }
    
    useEffect(() => {
        const newList = [...orders].filter(checkDay)
        if (daySelection) {
            setDaysList(newList)
        } else {
            setDaysList(orders)
        }
    }, [daySelection, orders])
    
    
    useEffect(() => {
        const newList = [...orders].filter(checkMonth)
        if (monthSelection) {
            setDaysList(newList)
        } else {
            setDaysList(orders)
        }
    }, [monthSelection, orders])
    
    const displayEmpty = () => {
        if ((daySelection && orders[0])||(monthSelection&&orders[0])) {
            return 'No orders for selected range'
        } else {
            return 'No orders'
        }
    }

    return (
        <div className="whole-order-box">
            <div className="order-box">
                <h3 onClick={()=>{console.log('I should sort when clicked')}}>Item Name</h3>
                <h3 onClick={()=>{console.log('I should sort when clicked')}}>Category</h3>
                <h3 onClick={()=>{console.log('I should sort when clicked')}}>Date</h3>
                <h3 onClick={()=>{console.log('I should sort when clicked')}}>Quantity</h3>
                <h3 onClick={()=>{console.log('I should sort when clicked')}}>Price</h3>
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
                
                )) : <h1 className="no-data">{displayEmpty()}</h1>}
        </div>
    )
}

export default OrdersDisplay;