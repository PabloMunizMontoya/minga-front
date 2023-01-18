import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const obtenerComics = createAsyncThunk(
    "obtenerComics",
    async({company, category, pages}) => {
        try{
            //console.log(category);
            let comics = await axios.get(`http://localhost:8000/api/comics/profile/company?company_id=${company}&category=${category.join(",")}&page=${pages}`)
            //console.log(comics)
            return {
                succes: true,
                response: {comics: comics.data.response}
            }
        }catch(error){
            return{
                succes: false,
                response: {error: error.message}
            }
        }
    }
    
)

const comicActions = {obtenerComics}

export default comicActions