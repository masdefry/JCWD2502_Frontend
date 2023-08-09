import logo from './logo.svg';
import './App.css';
import './Support/Stylesheet/Utils.css';

// Components
import Navbar from './Components/Navbar';
import Register from './Pages/Register/Index';
import FetchPage from './Pages/FetchPage/Index';
import Home from './Pages/Home/Index';

import axios from 'axios';
import toast from 'react-hot-toast';

import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Counter from './Pages/Counter/Index';
import { onCheckIsLogin } from './Redux/Features/User/Index';
import { getCartAsync } from './Redux/Features/Cart/Index';
import { useDispatch } from 'react-redux';
import Products from './Pages/Products/Index';


function App() {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const array = ['/register', '/login']
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onCheckIsLogin())
    dispatch(getCartAsync())
  }, [])

  return (
    <>
      {
        array.includes(pathname)?
          null
        :
          <Navbar />
      }
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/products/:id' element={<Products />} />
        </Routes>
    </>
  );
}

export default App;
