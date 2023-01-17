import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";


const { getChapter } = chapterActions;

const initialState = { chapters: [], message: "", chapter: [] };

const chapterReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(getChapter.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapters,
                message: action.payload.message
            }
            return newState
}
)
})

export default chapterReducer