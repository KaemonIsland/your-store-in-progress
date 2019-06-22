import React from 'react'

const CartSummary = ({total}) => (
    <>
        <h3>Total: ${total} + Shipping</h3>
        <h1>Your Cart:</h1>
    </>
)

export default CartSummary;