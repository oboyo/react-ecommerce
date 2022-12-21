import { Component } from "react";

export default class Default extends Component {

    render(){
        console.log(this.props)
        return (
            <>
            <h2>Page not found</h2>
            <p>The requested <span>{this.props.location.pathname}</span></p>
            </>
            
        )
    }
}