import { combineReducers } from "redux"
import productsReducer from './products'
import cartReducer from './cart'
import authReducer from './auth'

export default combineReducers({
    productsReducer,
    cartReducer,
    authReducer
})