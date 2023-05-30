import CartIcon from "./cartIcon";
import Classes from './cartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../createContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const {items}=cartCtx
  const [buttonIsBumped,setbuttonIsBumped ]= useState(false)
  useEffect(()=>{
    if(items.length===0){
      return
    }
    setbuttonIsBumped(true)
    const timer=setTimeout(()=>{
      setbuttonIsBumped(false)
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  },[items])
  const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount; 
  }, 0);
  const buttonClasses=`${Classes.button} ${ buttonIsBumped ? Classes.bump :'' }`
  return (
    <button onClick={props.onclick} className={buttonClasses}>
      <span className={Classes.icon}><CartIcon /></span>
      <span>Cart</span>
      <span className={Classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default CartButton;
