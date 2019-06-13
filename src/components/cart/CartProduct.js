import React from 'react'
import ProductImage from '../products/ProductImage'
import styled from 'styled-components'

const CartProductContainer = styled.div`
    display: flex;
`

const CartProduct = ({name, category, id, img, price, seller}) => {
    
    return (
        <CartProductContainer>
            <ProductImage img={img} />
            <h1>{name}</h1>
            <div>${price}</div>
        </CartProductContainer>
    )
}

export default CartProduct;