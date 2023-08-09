import axios from "axios";
import { toast } from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        setCarts: (initialState, action) => {
            console.log('>>>')
            console.log(action.payload)
            initialState.cart = action.payload
        }
    }
})

export const getCartAsync = () => async(dispatch) => {
    try {
        const userId = localStorage.getItem('idLogin')
        const carts = await axios.get(`http://localhost:5000/carts?_expand=product&userId=${userId}`)
        dispatch(setCarts(carts.data))
    } catch (error) {
        
    }
}

export const addToCartAsync = (data) => async(dispatch) => {
    try {
        console.log('???')
        console.log(data)
        const response = await axios.post(`http://localhost:5000/carts`, data)
        
        dispatch(getCartAsync())
    } catch (error) {
        console.log(error)
    }
}

export const {setCarts} = cartSlice.actions

export default cartSlice.reducer