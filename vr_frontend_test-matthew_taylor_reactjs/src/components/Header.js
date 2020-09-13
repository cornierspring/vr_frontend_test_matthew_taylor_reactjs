import React from 'react'

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
                title
            }
        }
    } 

}

export default Header;