import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import productsSlice from "./productsSlice";
import movieSlice from "./movieSlice";

const rootReducer = combineReducers({
    todo: todoSlice,
    product: productsSlice,
    movie: movieSlice
})



export default rootReducer;