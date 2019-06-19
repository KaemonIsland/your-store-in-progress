import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { logoutUser } from '../../reducers/auth'
import { withRouter } from 'react-router-dom'

const CartBadge = styled.span`
    color: rgba(255, 255, 255, .5);
    padding: 0 .3rem;
`

const NavBar = ({cart, user, loggedIn, dispatch, history}) => {
    let userLinks;

    const logout = () => {
        dispatch(logoutUser())
        history.push('/login')
    }

    switch(loggedIn) {
        case false:
            userLinks = (
                <>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </>
            )
            break;
        case true:
            userLinks = (
                <li className="nav-item">
                    <Link className="nav-link" onClick={logout}>Logout</Link>
                </li>
            )
            break;
        default:
            userLinks = "Something went wrong!"
    }

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
            {
                loggedIn ? `${user.name}'s` : 'Your'
            } Store in Progress</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {userLinks}
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
    const { user, loggedIn } = state.authReducer

    return {
        cart,
        user,
        loggedIn
    }
}

export default connect(
    mapStateToProps,
    null,
)(withRouter(NavBar))