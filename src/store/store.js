import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicReducer from "./ComicsFromCompany/reducers.js";
import comicsFromCategoryReducer from './ComicsFromCategories/reducers.js'

const store = configureStore({
    reducer: {
        alertReducer, 
        comicReducer ,
        comicsFromCategoryReducer

    },
    
})

export default store