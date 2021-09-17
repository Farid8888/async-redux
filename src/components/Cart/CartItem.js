import classes from './CartItem.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { cartActions } from '../store/cartReduucer';
import { uiActions } from '../store/cartShowReducer';

const CartItem = (props) => {
  const { title, quantity,  price, id ,description,totalprice} = props;
const dispatch = useDispatch()
const addItemHandler=()=>{
  dispatch(cartActions.addItem({
    totalprice:price,
    price:price,
    title:title,
    description:description,
    id:id,
    quantity:1
  }))
}
const removeItemHandler =()=>{
  dispatch(cartActions.removeItem({
    totalprice:price,
    price:price,
    title:title,
    description:description,
    id:id,
    quantity:1
  }))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalprice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={removeItemHandler}>-</button>
          <button type='button' onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
