import { Routes,Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import { Component } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Default from "./components/Default";
class App extends Component {
    render(){
        return (
            <>
            <Navbar />
            <Modal />
            <Routes>
                <Route path="/" element = {<ProductList />}/>
                <Route path="/details" element = {<Details />}/>
                <Route path="/cart" element = {<Cart/>}/>
                <Route path="/default" element = {<Default/>}/>
            </Routes>
            </>
        )
    }
}
export default App