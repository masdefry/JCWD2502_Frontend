import axios from "axios";
import { toast } from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    email: ''
}

export const userSlice = createSlice({
    name: 'user', 
    initialState, 
    reducers: {
        setTest: (initialState, action) => {
            initialState.email = action.payload
        }
    }
})

export const onLoginAsync = (inputEmail, inputPassword) => async(dispatch) => {
    // const navigate = useNavigate()
    try {
        const response = await axios.get(`http://localhost:5000/users?email=${inputEmail.current.value}&password=${inputPassword.current.value}`)
        if(!response.data.length) return toast.error('Account Not Found')
        
        toast.success('Login Success!')
        
        localStorage.setItem('idLogin', response.data[0].id)
        setTimeout(() => {
            dispatch(setTest(response.data[0].email))
        }, 3000)
    } catch (error) {
        
    }
}

export const onCheckIsLogin = () => async(dispatch) => {
    try {
        const id = localStorage.getItem('idLogin')
        
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        dispatch(setTest(response.data.email))
    } catch (error) {
        
    }
}

export const {setTest} = userSlice.actions

export default userSlice.reducer