import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductModel from './ProductModel';

const ProductContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: 0 .3rem .3rem rgba(0, 0, 0, .5);
`



const Product = ({img, rating, ...rest}) => {
    return (
        <ProductContainer>
            <ProductImage img={img} />
            <p>Rating: {rating} Stars</p>
            <ProductModel
                img={img}
                {...rest}
            />
        </ProductContainer>
    )
}

export default Product