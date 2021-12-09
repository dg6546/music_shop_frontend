const initialState = {
    _id: "",
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CART':
            return {
                _id: action.payload._id,
                totalPrice: action.payload.totalPrice,
                totalQuantity: action.payload.totalQuantity,
                products: action.payload.products
            }
        default:
            return {
            }
    }
}

export default cartReducer;