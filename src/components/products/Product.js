import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductModel from './ProductModel'

const ProductContainer = styled.div`
    border: 2px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: 0 .3rem .3rem rgba(0, 0, 0, .5);
`

const ProductButton = styled.button`
    width: 100%;
    border-radius: 1rem;
    background-color: white;
    border: 1px solid black;
    transition: all 300ms ease-in;
    outline: none;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: black;
        color: white;
    }
`



const Product = ({img, rating, addToCart, ...rest}) => {

    return (
        <ProductContainer className='container' >
            <ProductImage img={img} />
            <div>Rating: {rating} Stars</div>
            <ProductModel
                img={img}
                {...rest}
            />
            <ProductButton onClick={addToCart}>Add to Cart</ProductButton>
        </ProductContainer>
    )
}

export default Product