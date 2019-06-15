import React from 'react'
import ProductImage from '../products/ProductImage'
import styled from 'styled-components'
import { Button } from '../styled-components/base'

const CartProductContainer = styled.div`
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
    border-top: 1px solid black;
    margin: 1rem 0;
    padding: 1rem;
`

const ImageContainer = styled.div`
    width: 13rem;
`

const CartProduct = ({name, category, id, img, price, seller, remove}) => {
    
    return (
        <CartProductContainer>
            <ImageContainer>
                <ProductImage img={img} />
            </ImageContainer>
            <div>
                <h3>{name}</h3>
                <p>Sold by: <em>{seller}</em></p>
            </div>
            <div>
                <div>${price}</div>
                <Button onClick={remove}>Remove</Button>
            </div>
        </CartProductContainer>
    )
}

export default CartProduct;