const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export const removeProduct = productId => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}

export const updateQuantity = amount => {
    return {
        type: UPDATE_QUANTITY,
        amount
    }
}


const cartReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return [...state, action.product]
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.productId)
        default:
            return [...state]
    }
}

export default cartReducer;