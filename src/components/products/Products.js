import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import Alert from '../layout/Alert';
import ProductFilter from './ProductFilter'
//Redux data/actions
import { connect } from 'react-redux'
import { setProducts } from '../../reducers/products'
import { addProduct } from '../../reducers/cart'
import { fakeProducts } from '../assets/fakeProducts'


const ProductsContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(10.5rem, 1fr));
    grid-auto-rows: 15.5rem;
    justify-items: center;
    align-content: center;
    justify-content: space-evenly;
`

const Products = ({ match, cart, products, dispatch }) => {
    const [alert, setAlert] = useState({});

    const addProductToCart = newProduct => {
        const cartIds = cart.map(product => product.id)
        
        if (cartIds.every(value => value !== newProduct.id)) {
            setAlert({message: `${newProduct.name} has been added to your cart!`, type: 'success'})
            dispatch(addProduct(newProduct))
        } else {
            setAlert({message: `${newProduct.name} is already in your cart.`, type: 'info'})
        }
    }

    useEffect(() => {
    //Fake axios call to server
    dispatch(setProducts(fakeProducts))
    }, [])

    return (
        <>
        <ProductFilter match={match} />
        { alert ? <Alert {...alert} /> : null }
        <ProductsContainer className="container">
            {  products.length !== 0 ?
                products.map( (product, i) => (
                    <Product
                        key={i}
                        {...product}
                        addToCart={() => addProductToCart(product)}
                    />
                 )) :
                <h1>Loading</h1>
            }
        </ProductsContainer>
        </>
    )
}

const mapStateToProps = state => {
    const { products, filter } = state.productsReducer;
    const cart = state.cartReducer;
    return {
        products: products.filter(product => {
            if (filter === 'all') {
                return true;
            } else if (product.category === filter) {
                return true;
            } else {
                return false;
            }
        }),
        cart
    }
}

export default connect(
    mapStateToProps,
    null
)(Products);