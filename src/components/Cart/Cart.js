import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'
const Cart = (props) => {
  const items = useSelector(state=>state.cart.items)
  console.log(items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length > 0 ? <ul>
        {items.map(item=>{
          return <CartItem key={item.id} totalprice={item.totalprice}
                           description={item.description} title={item.title}
                           id={item.id} quantity={item.quantity} price={item.price} />
        })}
      </ul> : ''}
    </Card>
  );
};

export default Cart;
