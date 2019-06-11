import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 100%;
`

const ProductImage = ({img}) => {
    return (
        <LazyLoad height={200} once >
            <ImageContainer>
                <img src={img} alt="Clothing Item" width="100%" height="100%" />
            </ImageContainer>
        </LazyLoad>
    )
}

export default ProductImage;