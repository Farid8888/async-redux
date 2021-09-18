

const initialState ={
    cartShow:false,
    notification:null
}


const cartShowReducer =(state=initialState,action)=>{
    if(action.type === 'SHOW'){
        return {cartShow:!state.cartShow,notification:state.notification}
    }
    if(action.type === 'NOTIFICATION'){
        return {cartShow:state.cartShow,notification:{
            status:action.data.status,
            title:action.data.title,
            message:action.data.message
        }}
    }
    return state
}

export default cartShowReducer