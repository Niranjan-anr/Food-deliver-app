import { useContext, useState } from 'react';
import classes from './cart.module.css';
import Modal from './modal';
import CartContext from './createContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [ordered, setOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasItems = cartCtx.items.length > 0;
  const [submitted, setSubmitted] = useState(false);

  const checkoutDisplayer = () => {
    setOrdered(true);
  };

  const cancelAddressInput = () => {
    setOrdered(false);
  };

  const onFormSubmitHandler = async (userInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://food-delivery-76dab-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userInput,
          order: cartCtx.items
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit the order.');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      cartCtx.clearCart()
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      cartCtx.clearCart()
    }
  };

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
   const formItemsDisplay=<div>
   <ul className={classes['cart-items']}>{cartItems}</ul>
   <div className={hasItemsClass}>
     <span>Total amount</span>
     <span>{`Rs ${totalAmount}`}</span>
   </div></div>
  
  const cartDisplay = (<div>
    {!submitted && formItemsDisplay}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.cartHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={checkoutDisplayer}>Order</button>}
      </div>
    </div>
  );

  return (
    <Modal BackdropHandler={props.cartHandler}>
      {!isSubmitting && !submitted && cartDisplay}
      {submitted && !isSubmitting && <p>Order placed successfully!</p>}
      {isSubmitting && <p>...submitting</p>}
      {ordered && !submitted && !isSubmitting &&(
        <CheckoutForm onConfirm={onFormSubmitHandler} onCanceled={cancelAddressInput} />
      )}
    </Modal>
  );
};

export default Cart;
