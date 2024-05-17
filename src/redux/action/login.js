export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS"

export const login = ({ isLoggedIn, accessToken, refreshToken, userId }) => ({
    type: LOGIN,
    payload: {
        isLoggedIn,
        accessToken,
        refreshToken,
        userId
    }
})

export const logout = () => ({
    type: LOGOUT,
})

export const setLoginStatus = (isLoggedIn) => ({
    type: SET_LOGIN_STATUS,
    payload: {
        isLoggedIn
    }
})