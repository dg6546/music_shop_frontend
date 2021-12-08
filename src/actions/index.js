export const login = (user, _id) =>{
    return {
        type: 'SIGN_IN',
        payload: {user, _id}
    }
}

export const logout = () =>{
    return {
        type: 'SIGN_OUT'
    }
}