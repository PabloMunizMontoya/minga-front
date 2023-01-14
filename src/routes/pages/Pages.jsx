import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import "./navbar.css";
import "./pages.css";

//http://localhost:3000/pages/63bf08f7579da57eb3ad5fb4#
//use params
const { getChapterDetails, getChapters } = chapterActions;

function Pages() {
  const [current, setCurrent] = useState(0);
  const chapterStore = useSelector((state) => state?.pages);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();
  console.log(chapterStore);
  useEffect(() => {
    dispatch(getChapterDetails(id));
    dispatch(getChapters("63bf08f6579da57eb3ad5fb2"));
  }, [id]);

  console.log(chapterStore.chapter.comic_id);
  const getPagesImages = () => {
    if (chapterStore.chapter?.pages?.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="imageContainer">
          <img
            className="imagePage"
            src={chapterStore?.chapter?.pages?.[current]}
            alt="Comic Page"
          />
        </div>
      );
    }
  };

  const next = () => {
    console.log(chapterStore);
    if (current >= chapterStore.chapter?.pages?.length - 1) {
      console.log("end chapter");

      const nextchaptes = chapterStore.chapters.response.find(
        (chapter) => chapterStore.chapter.order + 1 === chapter.order
      );

      navigation(`/pages/${nextchaptes._id}`);
      setCurrent(0);
    }
    if (current !== chapterStore.chapter.pages?.length - 1) {
      setCurrent(current + 1);
    }
  };
  
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
    else if (chapterStore.chapter.order === 1) {
      navigation(`/comic/${chapterStore.chapter.comic_id}`);
    }
    else if (current === 0) {
      const prevchaptes = chapterStore.chapters.response.find(
        (chapter) => chapterStore.chapter.order - 1 === chapter.order
      );
      navigation(`/pages/${prevchaptes._id}`);
      setCurrent(prevchaptes.pages.length - 1);
      console.log("");
  }
  }

  const getChapterTitle = () => {
    if (chapterStore?.chapter.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <h2 className="titulo">
          {" "}
          Cap n°: {chapterStore.chapter.order} - {chapterStore.chapter?.title}
        </h2>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="titleContainer">{getChapterTitle()}</div>
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
