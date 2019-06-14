import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { setFilter } from '../../reducers/products'
import { connect } from 'react-redux'

const filters = [
    'all',
    'clothing',
    'shoes',
    'accessories'
]

const ProductFilterContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.2rem;
    
    & a {
        color: black;
    }
`

const ProductFilter = ({ dispatch, match }) => {
    
    dispatch(setFilter(match.params.filter))

    return (
        <ProductFilterContainer>
            {' | '}
            {
                filters.map(filter => {
                    return (
                        <>
                            <NavLink
                                to={`/products/${filter}`}
                                activeStyle={{
                                    color: 'red',
                                    fontWeight: 'bold'
                                }}
                            >{filter}</NavLink>
                            {' | '}
                        </>
                    )
                })
            }
        </ProductFilterContainer>
    )
}

export default connect(
    null,
    null,
)(ProductFilter)