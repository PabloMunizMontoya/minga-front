import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newChapter = createAsyncThunk("newChapter", async (chapter) =>{
    try {
        const response = await axios.post (
            "http://localhost:8000/api/chapters",
            chapter
        )
        return {
            response: {chapter: response.data},
            message: "Chapter created successfully ",
        }

    } catch (error) {
        return {
            response: {chapter: error.response.data},
            message: "Error creating chapter",
        }
    }

});



const getChapter = createAsyncThunk("getChapter", async ({comic: comic_id, chapter: order}) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/api/chapters/?comic_id=${comic_id}&order=${order}`
        )
        return {
            response: {chapter: response.data},
            message: "Chapter successfully obtained!"
        }
    } catch (error){
        return {
            response: {chapter: error.response.data},
            message: "Error: chapter cannot be obtained"
        }
    }

} )

const chapterAction = {
    newChapter,
    getChapter,
}

export default chapterAction