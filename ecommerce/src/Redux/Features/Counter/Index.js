import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    number: 100,
    products: []
}

export const counterSlice = createSlice({
    name: 'counter', 
    initialState, 
    reducers: {
        increment: (initialState) => {
            initialState.number += 1
        },
        decrement: (initialState) => {
            initialState.number -= 1
        },
        setProducts: (initialState, action) => {
            console.log('Action')
            console.log(action.payload.data)
            initialState.products = action.payload.data
        }
    }
})

export const fetchProductsAsync = () => async(dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/products')
        dispatch(setProducts(response))
    } catch (error) {
        
    }
}

export const {increment, decrement, setProducts} = counterSlice.actions

export default counterSlice.reducer