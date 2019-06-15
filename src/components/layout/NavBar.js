import React from 'react'
import ProductSearch from '../util/ProductSearch'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CartBadge = styled.span`
    color: rgba(255, 255, 255, .5);
    padding: 0 .3rem;
`

const NavBar = ({cart}) => {

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Your Store in Progress</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="/products/all" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                        Cart
                        <CartBadge>
                        { cart.length > 0 ? `- ${cart.length}` : null }
                        </CartBadge>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

const mapStateToProps = state => {
    const cart = state.cartReducer

    return {
        cart
    }
}

export default connect(
    mapStateToProps,
    null,
)(NavBar)