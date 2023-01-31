import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import '../App.css'
import { useDispatch, useSelector } from "react-redux";
import allComicsActions from "../store/getAllComics/action.getAllComics.js"
const  { getAllComics } = allComicsActions





export default function Carousel() {
  const [slideActivo, setSlideActivo] = useState(0);
  const dispatch = useDispatch()
  const comics = useSelector((store) => store?.allComics?.allcomics)
  console.log(comics)

  const comicsCopy = [...comics]
  comicsCopy.sort(function compare(a, b) {
    let dateA = new Date(a.createdAt);
    let dateB = new Date(b.createdAt);
    return dateB - dateA;
  })
  
  let comicOnly5 = comicsCopy.slice(0,5)
  console.log(comicOnly5)

    useEffect(() => {
        dispatch(getAllComics({

        }));
    }, []);

  

   useEffect(() => {
   let idInterval =  setInterval(() => {
       next()
     }, 3000)

     return () => clearInterval(idInterval)
   });

   const next = () => {
     setSlideActivo(slideActivo === comicOnly5.length - 1 ? 0 : slideActivo + 1);
   };
   const prev = () => {
     setSlideActivo(slideActivo === 0 ? comicOnly5.length - 1 : slideActivo - 1);
   };

  return (

      <div className="mySlides fade">
      
        <Slide url={comicOnly5[slideActivo]?.photo}/>
        <div className="backtext"><p className="text">{comicOnly5[slideActivo]?.title !== '' ? comicOnly5[slideActivo]?.title : 'Sin titulo'}</p></div>
        <a className="prev" onClick={prev} >&#10094;</a>
        <a className="next" onClick={next}>
          &#10095;
        </a>
      </div>
  );
}
