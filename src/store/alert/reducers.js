
import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions.js";

const {mingaAlert} = alertActions

const initialState = {
    view: false,
    messages: "",
    success: ''
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
                        messages: action.payload.messages,
                        success: action.payload.success
                    }
                    return newState
                }
            )
    }
)

export default alertReducer