import { createReducer } from "@reduxjs/toolkit";
import comicActions from "./actions";

const {obtenerComics} = comicActions

const initialState = { comics: [] }

const comicComp = createReducer(
    initialState, 
    (builder) => {
        builder.addCase(
            obtenerComics.fulfilled,
            (state, action) => {
                console.log(action.payload)
                let newState = {
                    comics: action.payload.response.comics
                }
                return newState
            }
        )
   }
)

export default comicComp