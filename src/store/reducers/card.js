    import { createSlice } from "@reduxjs/toolkit";

    const cardSlice = createSlice({
        name: 'card',
        initialState: {
            card: {},
        },
        reducers: {
            readProduct (state, actions) {
                state.card = (actions.payload)
            }
        }
    })

    export const {readProduct} = cardSlice.actions

    export default cardSlice.reducer