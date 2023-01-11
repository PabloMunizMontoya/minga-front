import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'
import pages   from "./chapter/reducers.js";

const store = configureStore({
    reducer: {alertReducer ,
        pages}
})

export default store

/* import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import comicReducer from "./comics/reducers"
import { configureStore } from "@reduxjs/toolkit"

import authorReducer from "./authors/reducers"

const store = configureStore({
  reducer: {
    author: authorReducer,
    comments: commentReducer,
    company: companyReducer,
    comics: comicReducer,
    
  }
  
})

export default store */