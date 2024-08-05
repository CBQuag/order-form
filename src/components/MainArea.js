import React from "react";
import OrderEntry from "./OrderEntry";
import OrdersDisplay from "./OrdersDisplay";
import { Butt } from "./butt";
import { ButtDisp } from "./buttdisp";

const MainArea = () => {
    
    return (
        <div>
            <Butt />
            <ButtDisp/>
            <OrderEntry />
            <OrdersDisplay/>
        </div>       
)
}

export default MainArea;