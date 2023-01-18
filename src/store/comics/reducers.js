import { createReducer } from "@reduxjs/toolkit";
import comicsActions from "./actions.js"

const {getComics}= comicsActions

const initialState = {comics : [], inputText: "", category:[]}

const comicsReducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getComics.fulfilled,
            (state,action) =>{
                let newState = {
                    comics: action.payload.response.comics,
                    text: action.payload.response.text,
                    category: action.payload.response.category,
                    
                }
                return newState
            }
        )
    }
)

export default comicsReducers