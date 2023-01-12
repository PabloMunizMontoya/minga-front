import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicsReducers from "./comics/reducers.js";

const store = configureStore({
    reducer: {
        alert: alertReducer,
        comics: comicsReducers
    
    }
})

export default store