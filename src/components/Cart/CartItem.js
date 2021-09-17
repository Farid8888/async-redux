import classes from './CartItem.module.css';
import {useSelector,useDispatch} from 'react-redux'

const CartItem = (props) => {
  const { title, quantity,  price, id ,description,totalprice} = props;
const dispatch = useDispatch()
const addItem=()=>{
  dispatch({type:'ADD ITEM',receiveItem:{
      totalprice:price,
      price:price,
      title:title,
      description:description,
      id:id,
      quantity:1
  }})
}
const removeItem =()=>{
  dispatch({type:'REMOVE ITEM',receiveItem:{
    totalprice:price,
    price:price,
    title:title,
    description:description,
    id:id,
    quantity:1
  }})
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
          <button type='button' onClick={removeItem}>-</button>
          <button type='button' onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
