import { createSlice, current } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        basket: [],
        pricesProducts: 0,
        count: 0
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)

            /* state.pricesProducts = state.basket.reduce((price, current) => {
                return price+current.price
            }, 0) */
        },
        removeProductBasket(state, action) {
            state.basket = state.basket.filter((item) => item.id !== action.payload.id)
        }
    }
})


export const {addProduct, removeProductBasket} = basketSlice.actions

export default basketSlice.reducer