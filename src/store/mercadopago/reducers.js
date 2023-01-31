import { createReducer } from "@reduxjs/toolkit";
import donationActions from "./actions";

const {donation} = donationActions

const initialState = {
    order: []
}

const donationReducers = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(donation.fulfilled,
                (state, action) => {
                    console.log(action)
                    let newState = {
                        mercadopago: action.payload.response
                    }
                    return newState
                }
            )
    }
)

export default donationReducers