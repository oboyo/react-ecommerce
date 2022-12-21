import { Component } from "react"
import { ContextConsumer } from "../Context"
import Product from "./Product"
import Title from "./Title"
export default class ProductList extends Component {
    render(){
       //const allProducts = storeProducts.map(product =>{
        //return <Product key={product.id} {...product}/>
        return (
           <>
            <Title title={`My Produc List`} />
           <div className="w3-row-padding">
           <ContextConsumer>
            {value =>{
                return value.products.map(product =>{
                    return <Product key = {product.id} product = {product} />
                })
            }}
           </ContextConsumer>
           </div>
         
           
           </>
          
        )
    }
}