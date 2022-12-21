export default function CartTotal({value}){
const{cartTotal,cartSubtotal,cartTax,clearCart} = value
    return (
        <div className="w3-right w3-section">
            <p><button className="w3-red w3-button" onClick={() =>clearCart()}>CLEAR CART</button></p>
            <h5>SUBTOTAL : $ {cartSubtotal}</h5>
            <h5>TAX : $ {cartTax}</h5>
            <h5>TOTAL : $ {cartTotal}</h5>
        </div>
    )
}