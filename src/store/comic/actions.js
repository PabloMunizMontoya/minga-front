import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const getComic = createAsyncThunk(
    "getComic",
    async (comic) => {
        try{
            let response = await axios.get(`http://localhost:8000/api/comics/${comic}`)
            return{
                response: {comic: response.data},
                message: "comic obtained"
            }
        }
        catch(error){
            console.log(error)
            return {
                response: {comic: error.response.data},
                message: "Comic not found"
            }
        }
    }
)
 const comicAction = {getComic}
 export default comicAction

