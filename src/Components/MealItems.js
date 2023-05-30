import { useContext } from 'react'
import classes from './MealItems.module.css'
import Form from './uI/form'
import CartContext from './createContext'
const MealIems=(props)=>{
    const cartCtx=useContext(CartContext)
    const addItemToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.title,
            amount:amount,
            price:props.price
        })
    }
return (
    <li  className={classes.meal}>
    <div>
       <h3>{props.title}</h3>
       <div className={classes.description}> {props.description}</div>
       <div className={classes.price}>  ${props.price} </div>
       <Form onAddToCart={addItemToCartHandler} />
    </div>
    </li>
)
}
export default MealIems