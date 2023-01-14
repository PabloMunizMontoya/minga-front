import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicReducer from "./ComicsFromCompany/reducers.js";

const store = configureStore({
    reducer: {alertReducer, comicReducer }
})

export default store