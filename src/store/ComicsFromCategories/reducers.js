import { createReducer } from "@reduxjs/toolkit";
import traerComicsdeCategoryActions from "./actions.js";

const {traerComicsdeCategory} = traerComicsdeCategoryActions

const initialState = {
    categoriesFromAuthor: []
}

const comicsFromCategoryReducer = createReducer(
    initialState, 
    (builder) => {
        builder.addCase(
            traerComicsdeCategory,
                (state, action) => {
                console.log(action.payload.category) 
                if(action.payload.click){
                    state.categoriesFromAuthor.push(action.payload.category)
                    console.log("agregar");
                }else{
                    let newState = {
                        ... state, 
                        categoriesFromAuthor:  state.categoriesFromAuthor.filter(cat => cat!==action.payload.category)
                    }
                    console.log("quitar");
                    return newState
                }   
                }
            )
    }
)

export default comicsFromCategoryReducer