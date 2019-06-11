import React from 'react'
import { connect } from 'react-redux'

const Cart = ({cart, dispatch}) => {

    console.log(cart)
    return (
        <h1>Cart:</h1>
    )
}

const mapStateToProps = state => {
    const { cart } = state.cartReducer
    return {
        cart
    }
}

export default connect(
    mapStateToProps,
    null
)(Cart);