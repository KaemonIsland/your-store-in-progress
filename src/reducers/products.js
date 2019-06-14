const SET_PRODUCTS = 'GET_PRODUCTS';
const SET_FILTER = 'SET_FILTER'

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

const defaultState = {
    products: [],
    filter: 'all'
}

const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {...state, products: [...action.products] }
        case SET_FILTER:
            return { ...state, filter: action.filter }
        default:
            return state;
    }
}

export default productsReducer;