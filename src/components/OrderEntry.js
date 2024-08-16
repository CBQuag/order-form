import React from "react";
import { useState, useEffect, useContext } from "react";
import OrderContext from "../context/OrderContext";
import './OrderEntry.css';

const OrderEntry = () => {
    const { setOrders, orders, orderData } = useContext(OrderContext);
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    
    //on click, adds new order object into orders
    const handleSubmit = () => {
        const newOrder={
            item: item,
            order_id: orders[orders.length-1].order_id+1,
            date: Date.now(),
            category: category,
            quantity: quantity,
            price: price
        };
        setItem('');
        setCategory('');
        setQuantity('');
        setPrice('');
        setOrders((prev)=>[...prev, newOrder])
    }
    
    return (<form>
        <ul className="order-form" >
            <li>
                <label htmlFor="item">Item Name: </label>
                <input type="text" name="" id="item" value={item} onInput={e=>setItem(e.target.value)}/>  
            </li>
            <li>
                <label htmlFor="category">Category: </label>
                <input type="text" name="" id="category" value={category} onInput={e=>setCategory(e.target.value)}/>  
            </li>
            <li>
                <label htmlFor="item">Quantity: </label>
                <input type="number" name="" id="quantity" value={quantity} onInput={e=>setQuantity(e.target.value)}/>  
            </li>
            <li>
                <label htmlFor="item">Price: </label>
                <input type="number" name="" id="price" value={price} onInput={e=>setPrice(e.target.value)}/>  
            </li>
            <button type="button" className="subBut" onClick={()=>handleSubmit()}>Submit</button>
        </ul>
        
    </form>)

}
export default OrderEntry;