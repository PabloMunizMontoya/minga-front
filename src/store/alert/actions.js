import { createAction } from "@reduxjs/toolkit";

const mingaAlert = createAction(
    "mingaAlert", 
    (datos ) => {
/*         console.log(data) */
        return {payload: datos}
    }
)
const alertActions = {mingaAlert}

export default alertActions

