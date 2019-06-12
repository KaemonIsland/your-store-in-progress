import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CartContainer = styled.div`
    margin-top: 5rem;
`

const Cart = ({cart, dispatch}) => {

    return (
        <CartContainer>
            <h1>In Your Cart:</h1>
            {
                cart.map(product => {
                    return (
                        <div>{product.name}</div>
                    )
                })
            }
        </CartContainer>
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