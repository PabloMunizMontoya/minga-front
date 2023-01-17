import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicsReducers from "./comics/reducers.js";
import filterCategoryReducer from "./comicCategories/reducers.js";

export const store = configureStore({
    reducer: {
        alertReducer,
        comics: comicsReducers,
        filterCategoryComic: filterCategoryReducer
    }
})

export default store