import { Component } from "react";
import styled from "styled-components"
import PropTypes from "prop-types"
import { ContextConsumer } from "../Context";
import {Link} from "react-router-dom"
export default class Product extends Component {
    render(){
        const{id,title,img,price,inCart} = this.props.product
        const cartDetails = inCart ? <span>In Cart</span> : <i className="fa fa-shopping-cart"></i>
        return (
            <>
            <ProductWrapper className="w3-col m4 l6 w3-section">
                <div className="w3-card">
                    <ContextConsumer>
                        {value =>{
                            return (
                                <div className="w3-container w3-display-container" onClick={() =>value.handleItem(id)}>
                                    <Link to = "/details"><img src={img} style = {{width: "100%",marginTop :"40px"}}/></Link>
                        
                                    <div style={{marginTop : "30px"}}>
                                    <span>{title}</span>
                                    <span className="w3-right">${price}</span>
                                    <button disabled = {inCart ? true : false} className="w3-display-right w3-btn w3-border w3-padding" 
                                        onClick={()=>{
                                        value.addToCart(id);
                                        value.modalOpen(id);
                                    }}>{cartDetails}</button>
                                    <p></p>
                        </div>
                    </div>
                            )
                        }}
                    </ContextConsumer>
                    
                </div>
            </ProductWrapper>
            
            </>
        )
    }
}
Product.propTypes = {
    product : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        price : PropTypes.number,
        title : PropTypes.string,
        inCart : PropTypes.bool
    }).isRequired
} 
const ProductWrapper = styled.div`

.w3-display-container {
    overflow : hidden
}
.w3-container:hover img {
        transform : scale(1.2)
    }
    img {
        transition : all 3s linear
    }

    button {
       transform : translate(100%,100%);
       transition : all 3s linear
      

    }
    .w3-container:hover button {
       transform : translate(0%,0%);
       transition : all 3s linear
    }
   
`

