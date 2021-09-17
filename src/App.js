import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { fetchCartData } from './components/store/cart-action';
import { sendCartData } from './components/store/cart-action';
import { Fragment } from 'react';
import Notification from './components/Layout/Notification';



function App() {
  const cartShow = useSelector(state=>state.ui.cartShow)
  const cart = useSelector(state=>state.cart)
  const notification = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(fetchCartData())
  },[dispatch])

  useEffect(()=>{
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  },[dispatch,cart])

  return (
    <Fragment>
     {notification && <Notification/>}
    <Layout>
      {cartShow && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
