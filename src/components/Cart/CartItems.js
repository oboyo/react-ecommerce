import { ContextConsumer } from "../../Context";

export default function CartItem({value,item}){
    const{title,img,price,count,id,total} = item
    const{increament,decreament,removeCart} = value
    
    return (
        <div className="w3-row-padding">
       <div className="w3-col m2 w3-center">
            <img src={img} style = {{width : "50px"}} />
       </div>
        <div className="w3-col m2 w3-center">
            <p>{title}</p>
        </div>
        <div className="w3-col m2 w3-center">
            <p><b>$-</b>{price}</p>
        </div>
        <div className="w3-col m2 w3-center">
            <button className="w3-button w3-border w3-padding-small" onClick={() =>decreament(id)}>-</button>
            <button className="w3-button w3-border w3-padding-small">{count}</button>
            <button className="w3-button w3-border w3-padding-small" onClick={() =>increament(id)}>+</button>
        </div>
        <div className="w3-col m2 w3-center">
            <button onClick={() =>removeCart(id)}>
            <i className="fa fa-trash w3-text-yellow"></i>
            </button>
        </div>
        <div className="w3-col m2 w3-center">
            <p>${total}</p>
        </div>
   </div>
    )
}
