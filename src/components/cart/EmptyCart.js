import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => (
    <>
    <h1>Your cart is empty</h1>
    <h2>Click <Link to="/products/all">here</Link> to start shopping!</h2>
    </>
)

export default EmptyCart;