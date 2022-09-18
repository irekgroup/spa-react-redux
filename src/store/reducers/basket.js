    import { createSlice } from "@reduxjs/toolkit";

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

                state.pricesProducts = state.basket.reduce((price, current) => {
                    return Number (price) + Number (current.price)
                }, 0)
            },
            removeProductBasket(state, action) {

                state.pricesProducts = Number(state.pricesProducts) - Number(state.basket.filter(el => el.id === action.payload.id)[0].price)

                state.basket = state.basket.filter((item) => item.id !== action.payload.id)
            }
        }
    })


    export const {addProduct, removeProductBasket} = basketSlice.actions

    export default basketSlice.reducer