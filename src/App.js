import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import OrderContext from './context/OrderContext';
import order_data from './context/order-data';

import { createContext, useContext, useEffect, useState } from 'react';

function App() {
  
  if (!localStorage.getItem('order-data')){
    localStorage.setItem('order-data', JSON.stringify(order_data));
  }
  
  let orderData = JSON.parse(localStorage.getItem('order-data'));
  
  const shorten = (original, length) => {
    return original.length > length ? `${original.slice(0,length)}...` : original;
  }
  
  const [orders, setOrders] = useState(orderData);
  
  return (
    <OrderContext.Provider value={{orders, setOrders, orderData, shorten}}>  
      <div className="App">
      <Header/>
      <MainArea/>
    </div>
    </OrderContext.Provider>
    
  );
}

export default App;
