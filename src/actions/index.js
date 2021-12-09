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

export const getCart = (_id, totalPrice, totalQuantity, products) =>{
    return {
        type: 'GET_CART',
        payload: {_id, totalPrice, totalQuantity, products}
    }
}