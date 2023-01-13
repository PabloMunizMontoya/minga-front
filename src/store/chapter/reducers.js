import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { newChapter, getChapterDetails } = chapterActions;

const initialState = { chapters: [], message: "" };

const chapterReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(newChapter.fulfilled, (state, action) => {
        let newState = {
            chapters: action.payload.response.chapter,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(newChapter.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
    .addCase(getChapterDetails.fulfilled, (state, action) => {
        let newState = {
            chapters: action.payload.response.chapter,
            message: action.payload.message
        }
        return newState
    })
    .addCase(getChapterDetails.rejected, (state, action) => {
        let newState = {
            message: "Error Loading Chapter"
        }
        return newState
    })
    /* .addCase(getChapterTitle.fulfilled,(state, action) => {
        let newState = {
            title: action.payload.response.data.response.title,
            message: action.payload.message
        }
        return newState
    })
    .addCase(getChapterTitle.rejected,(state, action) => {
        let newState = {
            message:  "Error Loading Title"
        }
        return newState
    }) */
})

export default chapterReducer