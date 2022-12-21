import { Component } from "react";
import Emptycart from "./Emptycart";
import Title from "../Title";
import { ContextConsumer } from "../../Context";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";


class Cart extends Component {
    render(){
        
        return (
            <ContextConsumer>
                {value =>{
                    const {cart} = value
                    if(cart.length > 0){
                        return (
                            <>
                              <div className="w3-container w3-section">
                              <Title title={`Your Cart`} />
                              <CartColumns />
                              <CartList value = {value} />
                              <CartTotal value = {value} />
                              </div>
                            </>
                        )
                    }
                    else if(cart.length === 0) {
                       return   <Emptycart />
                    }
                   }}
            </ContextConsumer>
            
        )
    }
}

export default Cart