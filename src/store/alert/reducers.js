import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions.js";

const {mingaAlert} = alertActions

const initialState = {
    view: false,
    messages: ""
}

const alertReducer = createReducer(
    initialState, 
    (builder) => {
        builder.addCase(
            mingaAlert,
                (state, action) => {
                console.log(action) 
                    let newState = {
                        view: true,
                        messages: action.payload
                    }
                    return newState
                }
            )
    }
)

export default alertReducer