import { createReducer } from "@reduxjs/toolkit";
import comicsActions from "./actions.js"

const {getComics}= comicsActions

const initialState = {comics : []}

const comicsReducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getComics.fulfilled,
            (state,action) =>{
                let newState = {
                    comics: action.playload.response
                }
                return newState
            }
        )
    
    
    }
)

export default comicsReducers