import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
    border: 1px solid black;
    width: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .5rem;
`

const ProductImg = styled.div`

`

const Product = ({name, id, description, img, lazyImage, price, rating, seller}) => {
    return (
        <ProductContainer>
            <div>{img}</div>
            <p>Rating: {rating} Stars</p>
            <div><strong>{name}</strong> ${price}</div>
        </ProductContainer>
    )
}

export default Product