import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login/Login';
import Cart from './page/Cart/Cart';
import Profile from './page/Profile/Profile';
import OrderForm from './page/Order/OrderForm';
import OrderList from './page/Order/OrderList';
import BillDetail from './page/BillDetail/BillDetail';
import '../src/assets/style.css';
import '../src/assets/reset.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/login" element ={<Login />} />
        <Route path ="/cart" element = {<Cart />} />
        <Route path ="/order-list" element ={<OrderList/>} />
        <Route path = "/order" element ={<OrderForm />} />
        <Route path = "/profile" element = {<Profile />} />
        <Route path = "/bill-detail" element = {<BillDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
