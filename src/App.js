import logo from './logo.svg';
import './App.css';
import Root from './components/Root';
import Calendar from './components/Calendar'
import OrderList from './components/OrderList';
import OrderContext from './context/OrderContext';
import order_data from './context/order-data';
import Home from './components/Home';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';


function App() {
  
  
  
  //seed in default data if there is no order-data localstorage item
  if (!localStorage.getItem('order-data')){
    localStorage.setItem('order-data', JSON.stringify(order_data));
  }
  let orderData = JSON.parse(localStorage.getItem('order-data'));
  
  const shorten = (original, length) => {
    return original.length > length ? `${original.slice(0,length)}...` : original;
  }
  
  //loading order state from localstorage
  const [orders, setOrders] = useState(orderData);
  const [total, setTotal] = useState(orderData);
  const [daySelection, setDayView] = useState(null);
  const [viewMode, setViewMode] = useState('light');
  
  function datediff(first, second) {
        let fDate = new Date(first) 
        let sDate = new Date(second)
        let cleanFDate = new Date(fDate.getFullYear(), fDate.getMonth(), fDate.getDate())
        let cleanSDate = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate())
        return Math.round((cleanSDate.getTime() - cleanFDate.getTime()) / (1000 * 60 * 60 * 24) );
    }

  
  //when orders is updated, update the permanent log
  useEffect(() => {
        localStorage.setItem('order-data', JSON.stringify(orders))
        //setting state again for the sake of calendar jank
        setTotal(orders)
    }, [orders])
  
  //initializing routes
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      
      {<Route path="" element={<Home />} />}
      {<Route path="orders" element={<OrderList />} />}
      {<Route path="calendar" element={<Calendar />} />}
    </Route>
  ))
  
  //giving context and starting routes at Root
  return (
    <OrderContext.Provider value={{ orders, setOrders, orderData, shorten, total, daySelection, setDayView, datediff }}>  
      <RouterProvider router={router}/>
    </OrderContext.Provider>
    
  );
}

export default App;
