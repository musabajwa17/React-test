/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    quantity : 1,
    totalPrice: 0
}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // increment : {
        //     prepare : (quantity,price)=>{
        //         return {payload : {quantity , price}}
        //     },
        //     reducer : (state, action)=>{
        //     state.quantity = state.quantity + action.payload.quantity; 
        //     state.totalPrice = state.totalPrice + action.payload.price;
        // }
        // },
        // decrement : {
        //     prepare : (quantity,price)=>{
        //         return {payload : {quantity , price}}
        //     },
        //     reducer : (state, action)=>{
        //     state.quantity = state.quantity - action.payload.quantity; 
        //     state.totalPrice = state.totalPrice - action.payload.price;
        // }
        // },
        total(state,action){
            state.totalPrice = state.totalPrice + action.payload;
        },
        quantity(state, action){
            state.quantity = action.payload
        },
        price(state, action){
            state.totalPrice = state.totalPrice - action.payload
        }
    }
})
export const {increment, decrement, total, price,quantity} = CartSlice.actions;
export default CartSlice.reducer;