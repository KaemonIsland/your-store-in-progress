import React, { useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
//Redux data/actions
import { connect } from 'react-redux'
import { setProducts } from '../../reducers/products'
import { fakeProducts } from '../assets/fakeProducts'

const ProductsContainer = styled.div`
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(10.5rem, 1fr));
    grid-auto-rows: 14rem;
    justify-items: center;
    align-content: center;
    justify-content: space-evenly;
`

const Products = ({ products, dispatch }) => {

    useEffect(() => {
    //Fake axios call to server
    dispatch(setProducts(fakeProducts))
    }, [])

    return (
        <ProductsContainer className="container">
            {  products.length !== 0 ?
                products.map( (product, i) => (
                    <Product
                        key={i}
                        {...product}
                    />
                 )) :
                <h1>Loading</h1>
            }
        </ProductsContainer>
    )
}

const mapStateToProps = state => {
    const { products } = state.productsReducer;
    return {
        products: products
    }
}

export default connect(
    mapStateToProps,
    null
)(Products);