import { createAction } from "@reduxjs/toolkit";

const traerComicsdeCategory = createAction(
    "traerComicsdeCategory", 
    (data ) => {
       console.log(data) 
        return {payload: data}
    }
)
const traerComicsdeCategoryActions = {traerComicsdeCategory}

export default traerComicsdeCategoryActions