import { createAction } from "@reduxjs/toolkit"

const filterCategoryComics = createAction(
    'filterCategoryComics',
    (data) => {
        
        return {
            payload: data
        }

    }
)

const filterCategoryComicsActions = { filterCategoryComics}

export default filterCategoryComicsActions