import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import './navbar.css'
import './pages.css'

//http://localhost:3000/pages/63bf08f7579da57eb3ad5fb4#
//use params
const { getChapterDetails, getChapterbyorderandcomic } = chapterActions



function Pages() {
  const [nextChap, setNetxChap] = useState('')
  const [prevChap, setPrevChap] = useState('')
  const [current, setCurrent ] = useState(0)
  
  const chapterStore = useSelector(state =>  state?.pages )
  const dispatch = useDispatch()
  const navigation = useNavigate()
const { id } = useParams() 
console.log(chapterStore)
  useEffect(() => {

    dispatch(getChapterDetails(id))
  }, [id])


const getPagesImages = () => {
    if (chapterStore.chapters?.pages?.length === 0) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="imageContainer"><img className="imagePage" src={chapterStore?.chapters?.pages?.[current]} alt="Comic Page" /></div>
      )
    }
  }

const next = () => {
  console.log(chapterStore)
  if(current >= chapterStore.chapters?.pages?.length - 1  ){
    console.log("end chapter");
    setPrevChap(current)

    navigation("/pages/63bf08f7579da57eb3ad5fb5")
    setCurrent(0)
    }
    if (current !== chapterStore.chapters.pages?.length - 1){
      setCurrent(current + 1)
  }
}
    
  const prev = () => {
    if (current >= 0) {
      setCurrent(current -1)
    }
    if (current < 0){
      navigation("/pages/63bf08f7579da57eb3ad5fb4#")
      setCurrent(prevChap)
    }
  }

  const getChapterTitle = () => {
    if (chapterStore?.chapters.length === 0) {
      return <p>Loading...</p>
    } else {
      return <h2 className="titulo"> Cap n°: {chapterStore.chapters.order} - {chapterStore.chapters?.title}</h2>
    }
  } 

  return (
    <>
      <Navbar/>

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