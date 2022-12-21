import { useContext } from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"
export default function Header(){
const{cartItems} = useContext(Context)
const myCart = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    
    return (
        <header className="header">
            <Link to={`/`}><h2>PicSome</h2></Link>
            <Link to={`/cart`}><i className={`ri-fw ri-2x ${myCart}`}></i></Link>
        </header>
    )
}