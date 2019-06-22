import React from 'react'
import CartProduct from './CartProduct'
import { removeProduct, removeAll } from '../../reducers/cart'
import { Button } from '../styled-components/base'


const CartItems = ({cart, dispatch}) => {
    return (
        <>
            { 
                cart.length > 1 ?
                <Button onClick={() => dispatch(removeAll())}>Remove all items</Button> :
                null
            }
            {
                
            cart.map(product => (
                <CartProduct
                    key={product.id}
                    {...product}
                    remove={() => dispatch(removeProduct(product.id))}
                />
            ))
            }
        </>
    )
}

export default CartItems;