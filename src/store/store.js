import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import comicReducer from "./comic/reducers.js";
import chapterReducer from "./chapter/reducers.js";

const store = configureStore({
    reducer: {
        alertReducer,
        comic:comicReducer,
        chapters: chapterReducer
    }
})

export default store