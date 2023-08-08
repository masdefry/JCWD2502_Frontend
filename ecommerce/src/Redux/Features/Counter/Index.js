const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter', 
    initialState, 
    // reducers: {
    //     increment: () => {

    //     }
    // }
})

export default counterSlice.reducer