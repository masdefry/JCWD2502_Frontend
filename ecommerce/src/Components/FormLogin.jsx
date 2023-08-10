import axios from "axios";
import Button from "./Button";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from "react-router-dom";

import { onLoginAsync } from "../Redux/Features/User/Index";
import { useDispatch, useSelector } from "react-redux";

import { setTest } from "../Redux/Features/User/Index";

// Import Firebase
import {auth} from './../firebase.js';
import {
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged, 
signOut} from 'firebase/auth';

  const provider = new GoogleAuthProvider();

export default function FormLogin(props){
  const {email} = useSelector((state) => state.users)

  const inputEmail = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onGetUser = async(_email) => {
    try {
      return await axios.get(`http://localhost:5000/users?email=${_email}`)
    } catch (error) {
      
    }
  }

  const onLoginWithGoogle = async() => {
    try {
      const response = await signInWithPopup(auth, provider)
      
      // Komen dibawah ini disuruh Aryo ya. Parah gasiii?
      // Yaiyalah di ketikin!
      // Cek email google nya udah ter-register atau belum
      const checkUser = await onGetUser(response.user.email)
      console.log(checkUser)
      // Kalo belum ter-register, lakukan post data nya
      if(!checkUser.data.length){
        await axios.post('http://localhost:5000/users', {email: response.user.email, fullname: response.user.displayName, password: '', isGoogle: true})
      }

      // Dispatch email ke global store, supaya bisa diakses di navbar
      dispatch(setTest(response.user.email))

      // Set local storage untuk login session nya
      const getId = await onGetUser(response.user.email)
      localStorage.setItem('idLogin', getId.data[0].id)
    } catch (error) {
      console.log(error)
    }
  }
  
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

            <button onClick={onLoginWithGoogle} className='bg-red-600 px-10 py-5 hover:bg-cyan-600 font-bold'>
              Login with Google
            </button>
          </div>
        </div>
    )
}