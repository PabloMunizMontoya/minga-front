import chapterAction from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const {getChapter} = chapterAction

const initialState = {
    chapters: [],
    message: ""
}

const chapterReducer = createReducer(
    initialState,
    (builder) => {
        builder 
                .addCase(getChapter.fulfilled,
                    (state, action) => {
                        let newState = {
                            chapters: action.payload.response.chapter,
                            message: action.payload.message
                        }
                        return newState
            }
        )
    }
)

export default chapterReducer