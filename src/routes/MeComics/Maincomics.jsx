import React, { useEffect, useRef, useState } from "react";
import "./maincomics.css";
import ComicsCategories from "./ComicsCategories";
import { useDispatch, useSelector } from "react-redux";

import ComicsCards from "./ComicsCards";
import Navbar from "../../layouts/navbar/NavBar";
import myComicsAction from "../../store/mycomics/actions";
import axios from "axios";

const { getMycomics } = myComicsAction;

const Maincomics = () => {
const myMail = useSelector((store) => store.auth.mail);
const { myComics } = useSelector((store) => store.myComic);
const dispatch = useDispatch();
const [reload, setReload] = useState(false)

const getData = async()=>{
  try {
      const response = await axios.get("http://localhost:8000/api/categories")
      setCategories(response.data.response)
      
  } catch(err){
      console.log(err)
  }
}

const [comics, setComics] = useState([])

const getComics = async() => {
  const res = await dispatch(getMycomics({ token }));
  try{
  console.log(res);
  
  }catch(error){
    console.log(error);
  }
}

const [categories, setCategories] = useState([])
  const token = localStorage.getItem("token");
  useEffect(() => {
    getComics()
     getData() 
  }, [reload]);

/* console.log(categories) */

 


console.log(myComics); 


  return (
    <main className="mainn">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-b">
        <div className="section2">
          <h1>{myMail}</h1>

        </div>
      </div>
      <div className="comics-containerr">
        <div className="explore-container"></div>
        <ComicsCategories />
        <div className="container-cards">
         {myComics?.map((card, index) => <ComicsCards key={index} data={card} reload={reload} setReload={setReload}/> )} 
        </div>
      </div>
    </main>
  );
};

export default Maincomics;
