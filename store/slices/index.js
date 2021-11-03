import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import productsSlice from "./productsSlice";

const rootReducer = combineReducers({
    todo: todoSlice,
    product: productsSlice
})



export default rootReducer;