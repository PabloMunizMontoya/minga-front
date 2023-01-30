import { createReducer } from "@reduxjs/toolkit";
import updateActions from "./actions";

const {update, disable} = updateActions

const initialState = {
    data: {}
}

const authorReducer = createReducer(
    initialState,
    (builder) => {
        builder 
            .addCase(update.fulfilled,
                (state, action) => {
                    let newState = {
                        data: action.payload.response.data 
                    }
                    return newState  
                }
                )
            .addCase(disable.fulfilled,
                (state, action) => {
                    let newState = {
                        author: action.payload.response.author
                    }
                    return newState
                }
                )    
    }
)

export default authorReducer