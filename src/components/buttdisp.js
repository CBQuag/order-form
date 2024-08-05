import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export const ButtDisp = () => {

    const { count } = useContext(OrderContext);
    
    return (
        <h1>{count}</h1>
)
    
}