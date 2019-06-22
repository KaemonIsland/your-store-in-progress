import React from 'react'
import { connect } from 'react-redux'
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'
import CartSummary from './CartSummary';
import styled from 'styled-components'
import { Button } from '../styled-components/base'

const CartContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;p
`

const PurchaseButton = styled(Button)`
    font-size: 1.5rem;
    padding: .5rem;
`

const Cart = ({cart, dispatch}) => {

    const getTotalPrice = cartItems => {
        const priceArr = cartItems.map(product => product.price)
        return priceArr.reduce((acc, cur) => acc + cur);
    }

    return (
        <CartContainer className="container">
            { cart.length < 1 ? 
                <EmptyCart /> : 
                <CartSummary total={getTotalPrice(cart)} />
            }
            <CartItems cart={cart} dispatch={dispatch} />
            { cart.length >= 1 ? <PurchaseButton>Proceed to Purchase</PurchaseButton> : null }
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