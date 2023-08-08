import axios from "axios";
import Button from "./Button";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from "react-router-dom";

import { onLoginAsync } from "../Redux/Features/User/Index";
import { useDispatch, useSelector } from "react-redux";

export default function FormLogin(props){
  const {email} = useSelector((state) => state.users)

  const inputEmail = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
    if(email) return navigate('/')

    return(
        <div>
          <Toaster />
          <div className='flex justify-center items-center bg-slate-100 w-full h-10'>
            <h1 className='text-xl font-bold'>
              RETURNING CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
             Email
            </h1>
            <input type='text' ref={inputEmail} placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Password
            </h1>
            <input type='password' ref={inputPassword} placeholder='Password' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            {/* <Button handleFunction={onLogin} handleClass={'px-10 py-5 hover:bg-cyan-600 font-bold'}>
              Login
            </Button> */}
            <button onClick={() => dispatch(onLoginAsync(inputEmail, inputPassword))} className='px-10 py-5 hover:bg-cyan-600 font-bold'>
              Login 
            </button>
          </div>
        </div>
    )
}