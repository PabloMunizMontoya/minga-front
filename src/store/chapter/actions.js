import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getChapter = createAsyncThunk(
    "getChapter",
    async ({id, pages}) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/chapters?comic_id=${id}&page=${pages}`)
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
            }}});

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/chapters",
            chapter,
        )
        return {
            response: { chapter: response.data },
            message: "Chapter created successfully",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error creating chapter",
        }
    }
});

const getChapterDetails = createAsyncThunk("getChapterDetails", async (_id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/api/chapters/pages/${_id}`
        )
        console.log(response.data?.response);
        return {
            response: {chapter: response.data.response},
            message: "Chapter successfully obtained!"
            
        }
        
    } catch (error) {
        return {
            response: {chapter: error.response.data},
            message: "Error: Chapter cannot be obtained."
        }
    }
})

const getChapters = createAsyncThunk(
    "getChapters",
    async (comic) => {
        try {
            const response= await axios.get(`http://localhost:8000/api/chapters/order?comic_id=${comic}`)
        return {
            response: {chapters: response.data},
            message: "Chapters obtained"
        }
        } catch (error) {
            return {
                response: {chapters: error.response.data},
                message: "Error obtained chapters"
            }
        }
    }
)

const getChapterbyorderandcomic = createAsyncThunk(
    "getChapterbyorderandcomic", 
    async ({order, comic_id})=>{
        try{
            console.log(order, comic_id);
            const response = await axios.get(`http://localhost:8000/api/chapters/order?order=${order}&comic_id=${comic_id}`)
            console.log(response)
            return{
                response: {chapter: response.data},
                message: "Chapters obtained"
            }
        }catch(error){
            return {
                
                message: "Error obtaining orders"
            }
        }
    }
)
const editChapter = createAsyncThunk("getChapters", async (chapter) => {
    console.log(chapter)
    try {
        const body = {
            [chapter.category] : chapter.data
        } 
        const response = await axios.put(
            `http://localhost:8000/api/chapters/${chapter.id}`,  body, //ruta , / segundo es el body lo que mando... 
            
        )
        return {
            response: { chapters: response.data },
            message: "Chapter editado",
        }
    } catch (error) {
        return {
            response: { chapters: error.response.data },
            message: "Error edit chapter",
        }
    }
})

const chapterActions = {
    newChapter,
    getChapterDetails,
    getChapters,
    getChapterbyorderandcomic,
    getChapter,
    editChapter
}

export default chapterActions
