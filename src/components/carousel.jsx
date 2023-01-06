import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from "./Slide";
import '../App.css'
export default function Carousel() {
  const [slideActivo, setSlideActivo] = useState(0);
  const [manga, setManga] = useState([]);
  const [categories, setCategories] = useState([])
  const datos = async () => {
    try {
      const res = await fetch("./manga.json");
      const data = await res.json();
      setManga(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
    datos()
  },[])
  

  useEffect(() => {
  let idInterval =  setInterval(() => {
      next()
    }, 3000)

    return () => clearInterval(idInterval)
  });

  const next = () => {
    setSlideActivo(slideActivo === manga.length - 1 ? 0 : slideActivo + 1);
  };
  const prev = () => {
    setSlideActivo(slideActivo === 0 ? manga.length - 1 : slideActivo - 1);
  };

  return (

      <div className="mySlides fade">
        <div className="categories">
          {categories?.map(category => <button className="category">{category.name}</button>)}
        </div>
        <Slide url={manga[slideActivo]?.photo}/>
        <div className="backtext"><p className="text">{manga[slideActivo]?.title !== '' ? manga[slideActivo]?.title : 'Sin titulo'}</p></div>
        <a className="prev" onClick={prev} >&#10094;</a>
        <a className="next" onClick={next}>
          &#10095;
        </a>
      </div>
  );
}
