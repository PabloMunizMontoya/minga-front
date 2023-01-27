import { createReducer } from "@reduxjs/toolkit";
import myComicsAction from "./actions";

const { getMycomics/* , deleteMycomics */, editMycomics } = myComicsAction;
const initialState = { myComics: [], message: "", category: [] };

const myComicReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMycomics.fulfilled, (state, action) => {
      let newState = {
        myComics: action.payload.response.comics.response,
        message: action.payload.message,
      };
      return newState;
    })
    .addCase(getMycomics.rejected, (state, action) => {
      let newState = {
        message: "ERROR",
      };
      return newState;
    })
    .addCase(editMycomics.fulfilled, (state, action) => {
      
        let newState = {
            comic: state.comic,
            comics: action.payload.response,
            message: action.payload.message,
        }
        
        return console.log(newState.comics)
    })
    /*     .addCase(deleteMycomics.fulfilled, (state, action) => {
      let newState = {
        comic: state.comic,
        comics: action.payload.response.comics,
        message: action.payload.message,
      };
      return newState;
  
    }); */ 
});

export default myComicReducer;
