import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({
    actionBlacklists: [],
    features: {
        pause: true,
        lock: true,
        persist: true,
        export: true,
        import: 'custom',
        jump: true,
        reorder: true,
        test: true,
        dispatch: process.env.NODE_ENV === 'production' ? false : true
    }
}) : f => f;

const enhancers = compose(
    applyMiddleware(thunk, logger),
    devTools,
)

const store = createStore(rootReducer, {}, enhancers)

export default store;