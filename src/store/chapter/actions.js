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
const updateChapter = createAsyncThunk("updateChapter", async (chapter, {rejectWithValue}) => {
    console.log(chapter)
    const token = localStorage.getItem("token")
    const { _id } = chapter
    delete chapter._id
    let headers = {headers: {'Authorization' :`Bearer ${token}`}}
    console.log(chapter)
    console.log (_id)
    try {
    
        const res = await axios.put(
            `http://localhost:8000/api/chapters/${_id}`,chapter,headers, //ruta , / segundo es el body lo que mando... 
            
        )
        return {
            success : true,
            response:  res.data.response,
            message: "Chapter editado",
        }
    } catch (error) {
        return rejectWithValue({
            success : false,
            response:  error.response.data,
            message: "Error edit chapter",
        })
    }
})
const deleteChapter = createAsyncThunk("deleteChapter", async (chapter, {rejectWithValue}) => {
    // console.log(chapter)
    const token = localStorage.getItem("token")
    // const { _id } = chapter
    // delete chapter._id
    const id = chapter._id
    console.log(id)
    let headers = {headers: {'Authorization' :`Bearer ${token}`}}
    // console.log(chapter)
    console.log (id)
    try {
    
        const res = await axios.delete(
            `http://localhost:8000/api/chapters/${id}`,headers //ruta , / segundo es el body lo que mando... 
            
        )
        return {
            success : true,
            response:  res.data.response,
            message: "Chapter deleted",
        }
    } catch (error) {
        return rejectWithValue({
            success : false,
            response:  error.response.data,
            message: "Error delete chapter",
        })
    }
})

const chapterActions = {
    newChapter,
    getChapterDetails,
    getChapters,
    getChapterbyorderandcomic,
    getChapter,
    updateChapter,
    deleteChapter
}

export default chapterActions
