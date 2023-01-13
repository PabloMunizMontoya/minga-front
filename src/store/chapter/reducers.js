import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { newChapter, getChapterDetails, getChapters, getChapterbyorderandcomic } = chapterActions;

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
<<<<<<<<< Temporary merge branch 1
    /* .addCase(getChapterTitle.fulfilled,(state, action) => {
        let newState = {
            title: action.payload.response.data.response.title,
=========

    .addCase(getChapterbyorderandcomic.fulfilled, (state, action)=>{
        let newState={
            chapters: action.payload.response.chapter,
>>>>>>>>> Temporary merge branch 2
            message: action.payload.message
        }
        return newState
    })
    .addCase(getChapters.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapters,
                chapter: state.chapter,
                message: action.payload.message
            }
            return newState
        }
        )
    
  
>>>>>>>>> Temporary merge branch 2
})

export default chapterReducer