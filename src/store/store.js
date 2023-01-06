import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducers.js'

const store = configureStore({
    reducer: {alertReducer}
})

export default store