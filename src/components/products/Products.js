import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getProducts } from '../../reducers/products'
import { fakeProducts } from '../assets/fakeProducts'

const ProductsContainer = styled.div`
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-auto-rows: 10rem;
    justify-items: center;
    align-content: center;
`

const Div = styled.div`
    border: 1px solid black;
    width: 10rem;
    
`

const Products = ({ products, dispatch }) => {

    useEffect(() => {
    //Fake axios call to server
    dispatch(getProducts(fakeProducts))
    }, [])

    console.log(products)
    return (
        <ProductsContainer className="container">
            <Div>Item 1</Div>
            <Div>Item 2</Div>
            <Div>Item 3</Div>
            <Div>Item 4</Div>
            <Div>Item 5</Div>
            <Div>Item 6</Div>
            <Div>Item 7</Div>
        </ProductsContainer>
    )
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer
    }
}

export default connect(
    mapStateToProps,
    null
)(Products);