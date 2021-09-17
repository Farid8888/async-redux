

const initialState ={
    cartShow:false,
}


const cartShowReducer =(state=initialState,action)=>{
    if(action.type === 'SHOW'){
        return {cartShow:!state.cartShow}
    }
    return state
}

export default cartShowReducer