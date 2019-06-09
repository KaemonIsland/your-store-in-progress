const SET_PRODUCTS = 'GET_PRODUCTS';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

const defaultState = {
    products: []
}

const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return { ...state, products: [...action.products] }
        default:
            return state;
    }
}

export default productsReducer;