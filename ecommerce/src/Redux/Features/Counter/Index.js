const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    number: 100,
    name: 'Ryan'
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
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer