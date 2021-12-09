import userReducer from "./user";
import cartReducer from "./cart"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    userReducer,
    cartReducer
})

export default allReducers;