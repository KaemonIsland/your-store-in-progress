const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = products => ({
    type: GET_PRODUCTS,
    products
})

const productsReducer = (state = [], action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return { ...state, products: [...action.products] }
        default:
            return state;
    }
}

export default productsReducer;