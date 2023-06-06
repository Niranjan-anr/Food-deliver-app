import Classes from './Header.module.css'
import image from '../Assets/meals.jpg'
import { Fragment } from 'react'
import CartButton from './uI/cartButton'
const Header=(props)=>{
    return <Fragment>
    <header className={Classes.header}>
        <h2> V V V </h2>
        <h2>virali vari vindhu</h2>
        <CartButton onclick={props.cartHandler}/>
    </header>
    <div className={Classes.Image} >
        <img src={image} alt="food table"/>
    </div>
    </Fragment>
}
export default Header;