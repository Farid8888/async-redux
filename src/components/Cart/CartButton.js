import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux'

const CartButton = (props) => {
const dispatch = useDispatch()
const totalQuantity = useSelector(state=>state.cart.totalQuantity)
const cartShowHandler =()=>{
  dispatch({type:'SHOW'})
}
  return (
    <button className={classes.button} type="button" onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
