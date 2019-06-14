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
    padding-top: 1rem;
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
    
    dispatch(setFilter(match.params.filter || 'all'))
    

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
                                    padding: '0 2rem',
                                    border: '1px solid black',
                                    borderRadius: '1rem',
                                    color: 'black'
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