const initialState = {
    userame: "",
    isLogged: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {
                userame: action.userame,
                isLogged: true
            }
        case 'SIGN_OUT':
            return {
                userame: "",
                isLogged: false
            }
        default:
            return {
                userame: "",
                isLogged: false
            }
    }
}

export default userReducer;