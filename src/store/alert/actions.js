import { createAction } from "@reduxjs/toolkit";

const mingaAlert = createAction(
    "mingaAlert", 
    (datos ) => {
        console.log(datos)
        return {payload: datos}
    }
)
const alertActions = {mingaAlert}

export default alertActions

