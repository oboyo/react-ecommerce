import { useContext, useState } from "react"
import { Context } from "../Context"

export default function Image({className,img}){
const[hover,setHover] = useState(false)
const{toggleFavorite,addCart,cartItems,removeCart} = useContext(Context)
function heartIcon(){
    if(img.isFavorite){
        return <i className="ri-heart-fill favorite"  onClick = {() => toggleFavorite(img.id) }></i>
    }
    else if(hover){
        return <i className="ri-heart-line favorite"  onClick = {() => toggleFavorite(img.id) }></i>
    }
}

function cartIcon(){
    const alreadycart = cartItems.some(item => item.id == img.id)
    if(alreadycart){
        return <i className="ri-shopping-cart-fill cart" onClick = {() => removeCart(img.id)}></i>
    }
    else if(hover){
        return <i className="ri-add-circle-line cart" onClick = {() => addCart(img) }></i>
    }
}
    return (
        <div className={`image-container ${className}`}
        onMouseEnter = {() => setHover(true)} 
        onMouseLeave = {() => setHover(false)} 
        >
            <img className="image-grid" src={img.url}/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}
