import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let getMycomics = createAsyncThunk(
    "getMycomics",
    async({token})=>{
        try{
            let url = `http://localhost:8000/api/comics/me/`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.get(url, headers)
            console.log(headers)
            console.log(token);
            console.log(response);
            return{
                    response: {comics: response.data} 
            }
        }catch (error){
            console.log(error)
        }
    }
)
const myComicsAction = {
    getMycomics
}

export default myComicsAction; 