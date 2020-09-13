import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title = "Shopping Cart Web App",
            headerLinks: [
                {title: "Browse", path: "/" },
                {title: "Shopping Cart", path: "/shoppingCart"}

            ],
            browse: {
                title: "Browse"
            },
            shoppingCart: {
                title: "ShoppingCart" 
            }
        };
    }


    render() {
        return (

        );
    }
}

export default Header;