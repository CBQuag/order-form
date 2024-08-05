import { useState, useContext } from "react";
import OrderContext from "../context/OrderContext";
import { ButtDisp } from "./buttdisp";

export const Butt = () => {
    
    const { count, setCount } = useContext(OrderContext);
    
    const handleClick = () => {
        setCount(count + 1);
    }
    
    
    return (
    <div>
        
        <button onClick={()=>handleClick()}>
        increment
        </button>
    </div>  
)
}