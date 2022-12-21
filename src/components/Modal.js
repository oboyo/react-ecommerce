import { Component } from "react";
import {Link} from "react-router-dom"
import { ContextConsumer } from "../Context";
export default class Modal extends Component {
    render(){
        return(
            <>
           <ContextConsumer>
            {value => {
                const {openModal,modalClose} = value;
                const{img,title} = value.detailProduct;
                const modal = {
                    display : openModal ? "block" : "none"
                }
                if(!openModal){
                    return null
                }
                else {
                    return (
                        <div className="w3-modal" style={{display : "block"}}>
                <div className="w3-modal-content w3-container">
                    <h2>Item Added to Cart</h2>
                    <img src={img} style={{width : "100%"}} />
                    <h2>{title}</h2>
                    <Link to = "/"><button className="w3-btn w3-blue" 
                    onClick={() => modalClose()}>Continue Shopping</button></Link>
                    <Link to = "/cart"><button className="w3-btn w3-text-yellow" 
                    onClick={() => modalClose()}>Go To Cart</button></Link>
                    <p></p>
                </div>
            </div>
                    )
                }
            }}
           </ContextConsumer>
            
            </>
        )
    }
}