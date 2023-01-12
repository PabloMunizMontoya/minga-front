import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";

import './pages.css'
import Nav2 from './Nav2'


//http://localhost:3000/pages/63bf08f7579da57eb3ad5fb4#
//use params
const { getChapterDetails } = chapterActions


function Pages() {
  const [ current, setCurrent ] = useState(0)

  const chapterStore = useSelector(state =>  state?.pages ) 
  const dispatch = useDispatch()

 /*  const { id } = useParams() */

  useEffect(() => {
    const url = window.location.href.split("/")
    const id = url[url.length - 1]
    console.log(url[url.length - 1]);
    dispatch(getChapterDetails(id))
  }, [])
  console.log(chapterStore);
 const getPagesImages = () => {
    if (chapterStore.chapters?.length === 0) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="imageContainer"><img src={chapterStore?.chapters?.[current]} alt="Comic Page" /></div>
      )
    }
  } 

  const next = () => {
    if (current !== chapterStore.chapters?.length - 1) {
      setCurrent(current + 1)
    }
  } 
  const prev = () => {
    if (current > 0) {
      setCurrent(current -1)
    }
  }


   const getChapterTitle = () => {
    if (chapterStore?.chapters.length === 0) {
      console.log(chapterStore)
      return <p>Loading...</p>
    } else {
      return <h2 className="titulo">{chapterStore.chapters?.response?.title}</h2>
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
        <nav>
        <img className="imgnav" src="/assets/logo1.png" alt="" />
        <div className="anchorContain">          
          <a className="anchor" href="#">Home</a>
          <a className="anchor" href="#">My comics</a>
          <a className="anchor" href="#">Logout</a>         
        </div>
        <a className="login-button" href="#">Sing in</a>
      </nav> */
      <div className="container">

          <div className="titleContainer">
            {getChapterTitle()}
          </div>
        <div className="comicPage">
          {getPagesImages()}
          <div className="leftButton" onClick={prev}></div>
          <div className="rightButton" onClick={next}></div>
        </div>
        <div className="commentContainer">
        <img className="puntos" src="/assets/puntos.png" alt="" />
        <p className="pcomments">42</p>
        </div>
      </div>
    </>
  );
}
export default Pages;