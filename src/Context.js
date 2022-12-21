import { Component, createContext } from "react";
import { storeProducts,detailProduct } from "./data";

const Context = createContext()

class ContextProvider extends Component {
   state = {
    products : [],
    detailProduct : detailProduct,
    cart : [],
    openModal : false,
    modalProduct : detailProduct,
    cartSubtotal :0,
    cartTax : 0,
    cartTotal : 0
    
   }
   componentDidMount(){
    this.setItems()
   }
   setItems = () => {
    let templateItem = []
    storeProducts.forEach(item =>{
        const newItem =  {...item}
        templateItem = [...templateItem,newItem]
        
    })
    this.setState(() =>{
        return {products:templateItem}
    })
   }
  
   getItems = (id) => {
    const product = this.state.products.find(item => item.id === id)
    return product
   }
   handleItem = (id) => {
    const product = this.getItems(id)
    this.setState(() =>{
        return {detailProduct : product}

    })
   }
   addToCart = (id) => {
    let templateItem = [...this.state.products]
    const index = templateItem.indexOf(this.getItems(id))
    const product = templateItem[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    this.setState(
        () => {
        return {product : templateItem,cart : [...this.state.cart, product]}
    },
        () => {this.addTotal()}
    )
       
    
   }
   modalOpen = (id) => {
        const product = this.getItems(id)
        this.setState(() => {
             return {modalProduct :product, openModal : true}
        })
       
   }
   modalClose = () => {
    this.setState(() =>{
        return {openModal : false}
    })
   }

   increament =  (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id == id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        this.setState(
            () =>{
            return {
                cart : [...tempCart]
            }
        },
            () =>{
                this.addTotal()
            }
        )
        

}

   decreament =  (id) => {
   let tempCart = [...this.state.cart]
   const selectedProduct = tempCart.find(item => item.id == id)
   const index = tempCart.indexOf(selectedProduct)
   const product  = tempCart[index]
   product.count = product.count - 1
   if(product.count == 0){
    return this.removeCart(id)
   }
   else {
    product.total = product.count * product.price
   }
   this.setState(
    () =>{
    return {cart : [...tempCart]}
    },
    () => {
        this.addTotal()
       }
   )
  
}
/*removeCart = (id) => {
    let tempProduct = [this.state.products]
    let tempCart = [this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id)
    let removedProduct = tempProduct[index]
    removedProduct
}
*/

   removeCart =  (id) => {
    let tempProduct = [...this.state.products]
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id)
    const index = tempProduct.indexOf(this.getItems(id))
    let removedProduct = tempProduct[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0
    this.setState(
        () => {
        return {
            cart : [...tempCart],
            products : [...tempProduct],
        }
    },
        () => {
            this.addTotal()
        }
    )
   

}
  

clearCart = () => {
    this.setState(
     () => {
     return {cart : []}
     },
     () => {
         this.setItems()
        } 
    )
   
 }

 addTotal =  () => {
    let subTotal = 0
    this.state.cart.map(item => (subTotal += item.total))
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total =  subTotal + tax
    this.setState(() => {
        return {
            cartSubtotal : subTotal,
            cartTax : tax,
            cartTotal : total  
        }
    })
}

    render(){
        return (
            <Context.Provider value={{
                ...this.state,
                handleItem:this.handleItem,
                addToCart : this.addToCart,
                modalOpen : this.modalOpen,
                modalClose : this.modalClose,
                increament : this.increament,
                decreament : this.decreament,
                removeCart : this.removeCart,
               clearCart : this.clearCart
                }}>
                    {this.props.children}
            </Context.Provider>
        )
    }
}


const ContextConsumer = Context.Consumer
export {ContextProvider,ContextConsumer}













































/*import { createContext, useEffect, useState } from "react";

const Context = createContext()
function ContextProvider({children}){
    const[allPhotos,setAllPhotos] = useState([])
    const[cartItems,setCartItems] = useState([])
    function toggleFavorite(id){
        const updatedPhoto = allPhotos.map((photo) =>{
            if(photo.id == id){
                return {...photo,isFavorite : !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhoto)
    }
    function addCart(newItem){
        setCartItems(prevCart => [...prevCart,newItem])
    }
    function removeCart(id){
        setCartItems(prevCart => prevCart.filter(item => item.id !== id))
    }
    useEffect(() =>{
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])
    return (
        <Context.Provider value={{allPhotos,toggleFavorite,addCart,cartItems,removeCart}}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider}
*/