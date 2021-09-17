
import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    items:[],
    totalQuantity:0,
    changed:false
}
const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        replaceCart(state,action){
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity
        },
        addItem(state,action){
           const newItem =action.payload 
           const existingItem = state.items.find(item=>item.id === newItem.id)
           state.totalQuantity = state.totalQuantity + newItem.quantity
           state.changed = true
           if(!existingItem){
               state.items.push(newItem)
           }else{
             existingItem.quantity = existingItem.quantity + newItem.quantity
             existingItem.totalprice = existingItem.totalprice + newItem.totalprice
           }
        },
       removeItem(state,action){
        const newItem =action.payload 
        const existingItem = state.items.find(item=>item.id === newItem.id)
        state.totalQuantity = state.totalQuantity - newItem.quantity
        state.changed = true
        if(existingItem && existingItem.quantity > 1){
          existingItem.quantity = existingItem.quantity - newItem.quantity
          existingItem.totalprice = existingItem.totalprice - newItem.totalprice
        }
        else if(existingItem.quantity === 1){
            state.items=state.items.filter(item=>item.id !== newItem.id)
        }
       }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer