import React from "react";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import urlApi from "../../url";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import './welcome.css'

export default function Welcome() {
  const dispatch = useDispatch();

  const verify = createAsyncThunk("verify", async (id) => {
    try {
      let token = localStorage.getItem("token");
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get(`${urlApi}api/auth/verify/${id}`, headers);
      return res;
    } catch (error) {}
  });

  const { verify_Code } = useParams();
  console.log(verify_Code);

  dispatch(verify(verify_Code));

  return (
    <>
        <header className="welcome">
          <div className="section-welcome">
            <h1>Hi, Welcome to MINGA!! </h1>
            <h4> Let´s start : ) </h4>
          <Anchor className="button-start" to={"/signin"}> Login  </Anchor>
          </div>
        </header>
    
    </>
  );
}
