import { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
class Navbar extends Component {
    render(){
        
        return (
            <div className="navbar navbar-expand-sm bg-primary px-xm-5">
                <Link to={`/`} className = "navbar-brand"><i className="fa fa-fw fa-phone"></i></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"><Link to={`/`} className="nav-link">Product</Link></li>
                </ul>
                <Link to={`/cart`} className="ml-auto">
                    <button><i className="fa fa-shopping-cart">Yes</i> myCart </button>
                </Link>
        </div>
        )
        
    }
}

export default Navbar