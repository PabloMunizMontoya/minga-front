import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicsReducers from "./comics/reducers.js";
import filterCategoryReducer from "./comicCategories/reducers.js";
import comicReducer from "./comic/reducers.js";
import chapterReducer from "./chapter/reducers.js";
import pages   from "./chapter/reducers.js";
import comicComp from "./ComicsFromCompany/reducers.js";
import comicsFromCategoryReducer from './ComicsFromCategories/reducers.js'
import allcomicsreducer from "./getAllComics/reducer.getAllComics.js";
import chapterFromComicReducer from "./ChaptersFromComic/reducer.ChaptersFromComics.js";
import getIdReducer from "./getIdAction/getIdReducer.js"
import authReducer from './auth/reducers';

const store = configureStore({
    reducer: {
        alertReducer,
        comic:comicReducer,
        chapters: chapterReducer,
        pages,
        comics: comicsReducers,
        filterCategoryComic: filterCategoryReducer,
        comicComp ,
        comicsFromCategoryReducer,
        allComics : allcomicsreducer ,
        chapterFromComicReducer,
        id: getIdReducer, 
        auth: authReducer
    }
  })





export default store