import CartItem from "./CartItems";

export default function CartList({value}){
    const{cart} = value
    return (
        <div className="w3-container">
            {cart.map((item) =>{
                return <CartItem key={item.id} value = {value} item = {item} />
            })}
        </div>
    )
}