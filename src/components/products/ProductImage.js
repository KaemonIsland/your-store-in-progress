import React from 'react'
import LazyLoad from 'react-lazyload'
import Tshirts from '../assets/ProductImages/Tshirts.jpg'
import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 100%;
`

const ProductImage = () => {
    return (
        <LazyLoad height={200} once >
            <ImageContainer>
                <img src={Tshirts} width="100%" height="100%" />
            </ImageContainer>
        </LazyLoad>
    )
}

export default ProductImage;