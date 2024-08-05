import React from "react";
import { useState, useEffect, useContext } from "react";
import OrderContext from "../context/OrderContext";
import './OrderEntry.css';

const OrderEntry = () => {
    const { setOrders, orders, orderData } = useContext(OrderContext);
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    
    const handleSubmit = () => {
        const newOrder={
            item: item,
            order_id: orders.length,
            date: Date.now(),
            category: category,
            quantity: quantity,
            price: price
        };
        orderData.push(newOrder);
        setOrders(orderData);
        console.log(orders)
        localStorage.setItem('order-data', JSON.stringify(orders))
    }
    
    return (<form>
        <ul className="order-box" >
            <li>
                <label htmlFor="item">Item Name: </label>
                <input type="text" name="" id="item" onInput={e=>setItem(e.target.value)}/>  
            </li>
            <li>
                <label htmlFor="category">Category: </label>
                <input type="text" name="" id="category" onInput={e=>setCategory(e.target.value)}/>  
            </li>
            <li>
                <label htmlFor="item">Quantity: </label>
                <input type="number" name="" id="quantity" onInput={e=>setQuantity(e.target.value)}/>  
            </li>
            <li>
                <label htmlFor="item">Price: </label>
                <input type="number" name="" id="price" onInput={e=>setPrice(e.target.value)}/>  
            </li>
        </ul>
        <button type="button" onClick={()=>handleSubmit()}>Submit</button>
    </form>)

}
export default OrderEntry;