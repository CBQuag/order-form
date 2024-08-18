import React from "react";
import Calendar from "./Calendar";
import OrderEntry from "./OrderEntry";
import OrdersDisplay from "./OrdersDisplay";
import './OrderList.css'

export default function OrderList(){
    
    return (
        <div>
            <div className="entrybox">
            <div className="empty"></div>
                <OrderEntry />
                <div className="calendarbox">
                <Calendar/>
                </div>
            </div>
            <OrdersDisplay/>
        </div>
        
)
}
