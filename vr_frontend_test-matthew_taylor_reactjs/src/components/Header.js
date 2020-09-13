import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootsrap/Container'

import BrowsingPage from '../pages/BrowsingPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Shopping Cart Web App',
      headerLinks: [
        { title: 'Browse', path: '/' },
        { title: 'Shopping Cart', path: '/shoppingCart' }
      ],
      browse: {
        title: 'Browse'
      },
      shoppingCart: {
        title: 'ShoppingCart'
      }
    }
  }

  render () {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Shopping Cart</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Browse
                </Link>
                <Link className='nav-link' to='/shoppingCart'>
                  ShoppingCart
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() => <BrowsingPage title={this.state.home.title} />}
          />

          <Route
            path='/shoppingCart'
            render={() => <ShoppingCartPage title={this.state.about.title} />}
          />
        </Container>
      </Router>
    )
  }
}

export default Header
