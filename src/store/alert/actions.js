import { createAction } from "@reduxjs/toolkit";

const mingaAlert = createAction(
    "mingaAlert", 
    (datos ) => {
        console.log(datos)
        return {payload: datos}
    }
)
const mingaAlertFalse = createAction(
    "mingaAlertFalse",
    (datos) => {
        console.log(datos)
        return {payload: datos}
    }
)
const alertActions = {mingaAlert, mingaAlertFalse}

export default alertActions

