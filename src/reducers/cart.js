const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

const removeProduct = productId => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}

const updateQuantity = amount => {
    return {
        type: UPDATE_QUANTITY,
        amount
    }
}

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {...state, cart: [...state.cart, action.product] }
        case REMOVE_PRODUCT:
            return {...state, cart: [state.cart.filter(product => product.id !== action.productId)]}
        default:
            return {...state}
    }
}

export default cartReducer;