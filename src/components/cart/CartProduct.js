import React from 'react'
import ProductImage from '../products/ProductImage'
import styled from 'styled-components'

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

const RemoveButton = styled.button`
    outline: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    font-weight: bold;
    border-radius: 1rem;
    transition: all 200ms ease-in;

    :hover {
        outline: none;
        color: white;
        background-color: black;
    }
`

const CartProduct = ({name, category, id, img, price, seller, remove}) => {
    
    return (
        <CartProductContainer>
            <ImageContainer>
                <ProductImage img={img} />
            </ImageContainer>
            <div>
                <h1>{name}</h1>
                <p>Sold by: <em>{seller}</em></p>
            </div>
            <div>
                <div>${price}</div>
                <RemoveButton onClick={remove}>Remove</RemoveButton>
            </div>
        </CartProductContainer>
    )
}

export default CartProduct;