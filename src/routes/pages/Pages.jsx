

/* ;
;
;


export default OneChapterCarousel; */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../layouts/nav/Nav";
import chapterActions from "../../store/chapter/actions";
import { useParams } from "react-router-dom";
import './pages.css'
import Slider from 'react-slick'
import axios from 'axios'


//use params
const { getChapterDetails } = chapterActions

function Pages() {
  const chapterStore = useSelector(state =>  state?.pages ) 
  console.log(chapterStore)
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    
      dispatch(getChapterDetails(id))
  }, [])
 const getPagesImages = () => {
    if (chapterStore.chapters?.length === 0) {
      return <p>Loading...</p>
    } else {
      return chapterStore?.chapters?.map((page) => (
        <div className="imageContainer" key={page}><img src={page} alt="Comic Page"/></div>
        
      ))
    }
  } 
/*   const getChapterTitle = () => {
    if (chapterStore?.chapters.length === 0) {
      return <p>Loading...</p>
    } else {
      return <h2>{chapterStore.chapters?.response?.title}</h2>
    }
  } 
  /* function OneChapterCarousel() {
    const [images, setImages] = useState([]);
  
    useEffect(() => { 
      axios.get('http://localhost:8000/api/chapters/63bf08f7579da57eb3ad5fb4')
          .then(response => {
          setImages(response);
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  console.log(images);

    const settings = {
      dots: true,
      infinite: false,
  
    };
    if (!images.data) {
      return <p>Loading...</p>
    } else {

      return (
      <Slider {...settings}>
      {images.data.response.pages.map( page => (
        <img src={page} alt="Comic Page"/>
      ))}
      </Slider>
      )
      
    }
  } */

  return (
    <>
      <Nav />
      <div className="container">
        <div className="header">
          <div className="titleContainer">
         {/* {getChapterTitle()} */}
          </div>
        </div>
        <div className="comicPage">

            {getPagesImages()}

          LAS PAG VA AQUI!

        </div>
        <div className="commentContainer">
        Footer
        </div>
      </div>
    </>
  );
}
export default Pages;