const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'

export const loginUser = user => ({
    type: LOGIN,
    user
})

export const logoutUser = () => ({
    type: LOGOUT
})

export const registerUser = user => ({
    type: REGISTER,
    user
})

export const defaultUser = {
    user: {
        name: 'Guest'
    },
    loggedIn: false
}

const authReducer = (state = {}, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, loggedIn: true, ...action.user};
        case REGISTER:
            return { ...state, loggedIn: true, ...action.user};
        case LOGOUT:
            return defaultUser
        default:
            return {...state};
    }
}

export default authReducer;