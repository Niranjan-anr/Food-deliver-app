import { useContext } from 'react';
import classes from './cart.module.css';
import Modal from './modal';
import CartContext from './createContext';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));

  const totalAmount = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0).toFixed(2);

  const hasItemsClass = `${classes.total} ${hasItems ? classes['has-items'] : ''}`;

  return (
    <Modal BackdropHandler={props.cartHandler}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={hasItemsClass}>
        <span>Total amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.cartHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
