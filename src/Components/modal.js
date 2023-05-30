import { Fragment } from "react"
import classes from './modal.module.css'
import ReactDOM from "react-dom"
const Backdrop=(props)=>{
    return <div onClick={props.onclick} className={classes.backdrop}/>
}
const Overlay = (props)=>{
    return <div className={classes.modal} >
    <div className={classes.content}>{props.children} </div> </div>
}
const portalLocation=document.getElementById('overlays')
const Modal =(props) =>{
    return <Fragment>
   {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portalLocation)}
    {ReactDOM.createPortal(<Backdrop onclick={props.BackdropHandler} />,portalLocation)}
    </Fragment>
}
export default Modal