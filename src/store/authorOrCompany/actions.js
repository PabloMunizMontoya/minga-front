import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = process.env.REACT_APP_URL
console.log(apiUrl)

const update = createAsyncThunk(
    "update",
    async({data, token, name}) => {
        try{
            let url = `http://localhost:8000/api/${name}/me`
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.put(url, data, headers)
/*             console.log(response) */
            return {
                success: true,
                response: {data: response.data}
            }
        } catch(error){
            return {
                success: false,
                response: error.response.data.response
            }
        }
    }
)

const disable = createAsyncThunk(
    "disableAuthor",
    async({token, name, active}) => {
        try{
            let url = `http://localhost:8000/api/${name}/me`
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.put(url, {active: active}, headers)
            return {
                success: {author: response.data},
                response: "Your account was succesfully deleted"
            }
        }catch(error){
            return{
                success: {author: error.response.data},
                response: "Failed to delete your account"
            }
        }
    }
)

const updateActions = {
    update,
    disable
}

export default updateActions