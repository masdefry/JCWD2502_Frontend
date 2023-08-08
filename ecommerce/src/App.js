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
import { useState } from 'react';
import Counter from './Pages/Counter/Index';

function App() {
  const [email, setEmail] = useState(null)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const array = ['/register', '/login']

  const onLogin = async(inputEmail, inputPassword) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${inputEmail.current.value}&password=${inputPassword.current.value}`)
      if(!response.data.length) return toast.error('Account Not Found')
      
      toast.success('Login Success!')
      
      setTimeout(() => {
        navigate('/')
        setEmail(response.data[0].email)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        array.includes(pathname)?
          null
        :
          <Navbar userEmail={email} />
      }
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/register' element={<Register handleFunctionFromApp={onLogin} />} />
        <Route path='/counter' element={<Counter />} />
        </Routes>
    </>
  );
}

export default App;
