import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let getMycomics = createAsyncThunk("getMycomics", async ({token}) => {
  try {
    let url = `http://localhost:8000/api/comics/me/`;
    let headers = {headers:{Authorization: `Bearer ${token}`,},};
    const response = await axios.get(url, headers);
    return {
      response: { comics: response.data },
      message: "Comics found"
    };
  } catch (error) {
    console.log(error);
  }
});

let editMycomics = createAsyncThunk(
  "editMycomics", async ({data, id ,token}) => {
  try {
    let url = `http://localhost:8000/api/comics/${id}/`;
    let headers = {headers:{Authorization: `Bearer ${token}`,},};
    const response = await axios.put(url,data,headers);
    console.log(data)
    return {
      response: { comics: response.data },
      message: "Comic found"
    };
  } catch (error) {
    console.log(error)
    return{
      response: {comics: error.response.data},
      message: "Comic not found"
  }
  }
});

let deleteMycomics = createAsyncThunk("deleteMycomics", async (comic_id) => {
    const token = localStorage.getItem("token")
  try {
    let url = `http://localhost:8000/api/comics/${comic_id}`;
    let headers = {headers:{Authorization: `Bearer ${token}`,},};
    const response = await axios.delete(url, headers);
    return {
      response: { comics: response.data },
    };
  } catch (error) {
    console.log(error);
  }
}); 

const myComicsAction = {
  getMycomics,
  deleteMycomics, 
  editMycomics
};

export default myComicsAction;

