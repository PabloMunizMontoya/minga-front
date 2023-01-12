import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getChapter = createAsyncThunk(
    "getChapter",
    async (comic) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/chapters?comic_id=${comic}`)
            console.log(response)
            return {
                response: {chapters: response.data},
                message: "Chapter obtained"
            }
        }
        catch(error){
            console.log(error)
            return {
                response: {chapters: error.response.data},
                message: "Error chapter not found"
            }
        }
    }
)

const chapterAction = {getChapter}

export default chapterAction