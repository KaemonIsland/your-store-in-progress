import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CartProduct from './CartProduct'
import { removeProduct } from '../../reducers/cart'
import { Link } from 'react-router-dom'
import { Button } from '../styled-components/base'
import { removeAll } from '../../reducers/cart'

const CartContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
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
                (
                    <>
                    <h1>Your cart is empty</h1>
                    <h2>Click <Link to="/products/all">here</Link> to start shopping!</h2>
                    
                    </>
                ) : 
                (
                    <>
                        <h3>Total: ${getTotalPrice(cart)} + Shipping</h3>
                        <h1>Your Cart:</h1>
                        <Button onClick={() => dispatch(removeAll())}>Remove all items</Button>
                    </>
                )
            }
            {
                cart.map(product => (
                    <CartProduct
                        key={product.id}
                        {...product}
                        remove={() => dispatch(removeProduct(product.id))}
                    />
                ))
            }
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