import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    cartShow:false,
    notification:null
}

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        toggle(state){
            state.cartShow = !state.cartShow
        },
        showNotification(state,action){
            state.notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message
        }
    }
}
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer