import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CartProduct from './CartProduct'

const CartContainer = styled.div`
    margin-top: 2rem;
`

const Cart = ({cart, dispatch}) => {
    return (
        <CartContainer className="container">
            <h1>In Your Cart:</h1>
            {
                cart.map(product => (
                    <CartProduct
                        key={product.id}
                        {...product}
                    />
                ))
            }
        </CartContainer>
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
    null
)(Cart);