const SET_PRODUCTS = 'GET_PRODUCTS';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

const productsReducer = (state = [], action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return [...action.products]
        default:
            return state;
    }
}

export default productsReducer;