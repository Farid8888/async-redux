import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useEffect,Fragment} from 'react'
import {fetchCartData} from './components/store/cart-action'
import { sendCartData } from './components/store/cart-action';
import {useDispatch,useSelector} from 'react-redux'
import Notification from './components/Layout/Notification';




function App() {
  const cartShow = useSelector(state=>state.cartShow.cartShow)
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
 
  const notification = useSelector(state=>state.cartShow.notification)
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
