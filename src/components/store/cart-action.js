



export const fetchCartData=()=>{
   return  async (dispatch)=>{
        const fetchData =async()=>{
            const response = await fetch('https://books-835f7-default-rtdb.firebaseio.com/cart.json')
            if(!response.ok){
                throw new Error('Fetch data failed')
            }
            const data = await response.json()
            
            dispatch({type:'REPLACE',cart:{
                items:data.items || [],
                totalQuantity:data.totalQuantity
            }})
        }
        try{
            await fetchData()
        }catch(error){
            dispatch({type:'NOTIFICATION',data:{
                status:'error',
                title:'Error',
                message:'Fetching cart data failed!',
            }})
        }
    }
}

export const sendCartData =(cartData)=>{
    return async (dispatch)=>{
        dispatch({type:'NOTIFICATION',data:{
            status:'pending',
            title:'Sending...',
            message:'Sending cart data!',
        }})
        const sendRequest =async()=>{
            const response = await fetch('https://books-835f7-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body:JSON.stringify({
                    items:cartData.items,
                    totalQuantity:cartData.totalQuantity
                })
            })
            if(!response.ok){
                throw new Error('Sent cart data failed.')
            }
        }
        try{
            await sendRequest()
            dispatch({type:'NOTIFICATION',data:{
                status:'success',
                title:'Success',
                message:'Sent cart data successfully!'
            }})
        }catch(error){
            dispatch({type:'NOTIFICATION',data:{
                status:'error',
                title:'Error',
                message:'Sending cart data failed!'
            }})
        }
        
    }
}