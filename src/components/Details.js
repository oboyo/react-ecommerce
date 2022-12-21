import { Component } from "react";
import { ContextConsumer } from "../Context";
import {Link} from "react-router-dom"
class Details extends Component {
  render(){
        return (
            <>
            <h2>Product details</h2>
            <ContextConsumer>
              {value => {
                const{title,img,price,info,inCart,id} = value.detailProduct
                
                return (
                    <div className="w3-row-padding">
                        <div className="w3-col m6">
                            <img src={img} />
                        </div>
                        <div className="w3-col m6 w3-container">
                            <div className="w3-card">
                                <div className="w3-container">
                                    <h2 className="w3-margin-top">{title}</h2>
                                    <p><b>Price : $ {price}</b></p>
                                    <p><b>Some info about the product</b></p>
                                    <p>{info}</p>
                                    <Link to = "/"><button className="w3-button w3-gray">Go to Product</button></Link>
                                    
                                    <button disabled = {inCart ? true : false} className="w3-button w3-gray w3-right" onClick={() =>{
                                        value.addToCart(id);
                                        value.modalOpen(id)
                                    }}>{inCart ? "In Cart":"Add to Cart"}</button>
                                    <p></p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                )
              }}
            </ContextConsumer>
            </>
        )
    }
}

export default Details