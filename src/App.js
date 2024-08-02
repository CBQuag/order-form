import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import OrderContext from './context/OrderContext';
import order_data from './context/order-data';

import { createContext, useContext, useEffect, useState } from 'react';

function App() {
  
  const [orders, setOrders] = useState(order_data);
  
  return (
    <OrderContext.Provider value={{orders, setOrders}}>  
      <div className="App">
      <Header/>
      <MainArea/>
    </div>
    </OrderContext.Provider>
    
  );
}

export default App;
