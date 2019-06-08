import { combineReducers } from "redux";

const defaultState = {
    test: 'Not a Test'
}

const fakeReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'TEST':
            return { test: 'Test is Active' }
        default:
            return state;
    }
}

export default combineReducers({
    fakeReducer,
})