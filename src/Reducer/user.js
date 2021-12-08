const initialState = {
    userame: "",
    _id: "",
    isLogged: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {
                username: action.payload.user,
                _id: action.payload._id,
                isLogged: true
            }
        case 'SIGN_OUT':
            return {
                username: "",
                isLogged: false
            }
        default:
            return {
                username: "",
                isLogged: false
            }
    }
}

export default userReducer;