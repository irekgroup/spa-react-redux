import { createSlice } from "@reduxjs/toolkit";


const basketSlise = createSlice ({
    name: 'basket',
    initialState: {
        basket: []
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)
        }
    }
})

export const {addProduct} = basketSlise.actions

export default basketSlise.reducer