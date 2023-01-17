import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getComics = createAsyncThunk(
    "getComics",
    async ({inputText, inputCategory, pages}) =>{
        try{
            let comics = await axios.get(`http://localhost:8000/api/comics?title=${inputText}&category=${inputCategory}&page=${pages}`)
            console.log(inputCategory)
            return {
                success: true ,
                response: {
                    comics:comics.data.response,
                    text: inputText
                    
                }
            }
        } catch (error) {   
            return {
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const comicsActions = { getComics }

export default comicsActions