



const initialState = {
    items:[],
    totalQuantity:0,
    changed:false
}


const cartReducer =(state=initialState,action)=>{
    if(action.type === 'ADD ITEM'){
     const total = state.totalQuantity + action.receiveItem.quantity  
     let updateItems = []
    const index = state.items.findIndex(item=>item.id === action.receiveItem.id)
    const itemIndex = state.items[index] 
     if(itemIndex){
        const newItems =[...state.items]
        const newItem = {...itemIndex,totalprice:itemIndex.totalprice + action.receiveItem.totalprice,quantity:itemIndex.quantity + action.receiveItem.quantity}
        newItems[index]=newItem
         updateItems=newItems
     }else{
         updateItems=state.items.concat(action.receiveItem)
     }
     return {items:updateItems,totalQuantity:total,changed:true}
     }
     if(action.type === 'REMOVE ITEM'){
        const total = state.totalQuantity - action.receiveItem.quantity  
        let updateItems = []
       const index = state.items.findIndex(item=>item.id === action.receiveItem.id)
       const itemIndex = state.items[index] 
        if(itemIndex && itemIndex.quantity >1){
           const newItems =[...state.items]
           const newItem = {...itemIndex,totalprice:itemIndex.totalprice - action.receiveItem.totalprice,quantity:itemIndex.quantity - action.receiveItem.quantity}
           newItems[index]=newItem
            updateItems=newItems
        }else if(itemIndex.quantity === 1){
            updateItems=state.items.filter(item=>item.id !== action.receiveItem.id)
        }
        return {items:updateItems,totalQuantity:total,changed:true}   
     }
     if(action.type === 'REPLACE'){
      return {items:action.cart.items,totalQuantity:action.cart.totalQuantity,changed:state.changed}
    }
    return state
}

export default cartReducer