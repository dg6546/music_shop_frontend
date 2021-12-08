export const login = (user) =>{
    return {
        type: 'SIGN_IN',
        payload: user
    }
}

export const logout = () =>{
    return {
        type: 'SIGN_OUT'
    }
}