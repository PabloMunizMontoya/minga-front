import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicComp from "./ComicsFromCompany/reducers.js";
import comicsFromCategoryReducer from './ComicsFromCategories/reducers.js'

const store = configureStore({
    reducer: {
        alertReducer, 
        comicComp ,
        comicsFromCategoryReducer

    },
    
})

export default store