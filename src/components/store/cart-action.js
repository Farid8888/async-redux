import { cartActions } from "./cartReduucer"
import { uiActions } from "./cartShowReducer"



export const fetchCartData=()=>{
   return async (dispatch)=>{
        const fetchData =async()=>{
          const response = await fetch('https://books-835f7-default-rtdb.firebaseio.com/cart.json')
          if(!response.ok){
              throw new Error('Fetch failed')
          }
          const data = await response.json()
           dispatch(cartActions.replaceCart({
               items:data.items || [],
               totalQuantity:data.totalQuantity
           }))
        }
        try{
            await fetchData()
        }catch(error){
          dispatch(uiActions.showNotification({
              status:'error',
              title:'Error',
              message: 'Fetching cart data failed!',
          }))
        }
    }
}

export const sendCartData =(cart)=>{
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:'Sending cart data'
        }))
        const sendRequest = async()=>{
          const response =await fetch('https://books-835f7-default-rtdb.firebaseio.com/cart.json',{
              method:'PUT',
              body:JSON.stringify({
                  items:cart.items,
                  totalQuantity:cart.totalQuantity
              })
          })
          if(!response.ok){
              throw new Error('Sending cart data failed.')
          }
        }
        try{
            await sendRequest()
             dispatch(uiActions.showNotification({
                status:'success',
                title:'Success',
                message:'Sent cart data successfully!'
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error',
                message:'Sending cart data failed!'
            })
            )}
    }
}