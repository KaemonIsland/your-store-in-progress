import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductModel from './ProductModel'
import { Button } from '../styled-components/base'

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



const Product = ({img, rating, addToCart, ...rest}) => {

    return (
        <ProductContainer className='container' >
            <ProductImage img={img} />
            <div>Rating: {rating} Stars</div>
            <ProductModel
                img={img}
                {...rest}
            />
            <Button onClick={addToCart}>Add to Cart</Button>
        </ProductContainer>
    )
}

export default Product