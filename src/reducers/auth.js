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

const authReducer = (state = defaultUser, action) => {
    switch(action.type) {
        case LOGIN:
            return { loggedIn: true, user: {...action.user } };
        case REGISTER:
            return { loggedIn: true, user: {...action.user} };
        case LOGOUT:
            return { loggedIn: false, user: {} }
        default:
            return {...state};
    }
}

export default authReducer;