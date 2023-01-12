import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getComics = createAsyncThunk(
    "getComics",
    async ({inputText, inputSort, inputCategory}) =>{
        try{
            let comics = await axios.get(`http://localhost:8000/api/comics?title=${inputText}&category_id=${inputCategory}&sort=${inputSort}`)

            return {
                success: true ,
                response: {comics:comics.data.response}

            }

        }catch(error){
            return {
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const comicsActions = {getComics}

export default comicsActions