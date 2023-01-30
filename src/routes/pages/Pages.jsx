import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../layouts/navbar/NavBar";
import "./pages.css";
import { Link as Anchor } from "react-router-dom";

//http://localhost:3000/pages/63bf08f7579da57eb3ad5fb4#
//use params

const { getChapterDetails, getChapters } = chapterActions;

function Pages() {
  const [current, setCurrent] = useState(
    JSON.parse(localStorage.getItem("page"))
  );

  const chapterStore = useSelector((state) => state?.pages);
  const comicId = useSelector((state) => state?.chapters?.chapter?.comic_id);
  console.log(comicId);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();
  console.log(chapterStore);
  useEffect(() => {
    dispatch(getChapterDetails(id));
    dispatch(getChapters(comicId));
  }, [id,comicId]);

  console.log(chapterStore.chapter?.comic_id);
/*   console.log('capitulo 5',chapterStore?.chapter.pages[5]) */
  const getPagesImages = () => {
    if (chapterStore.chapter?.pages?.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <img
          className="imagePage"
          src={chapterStore?.chapter?.pages?.[current]}
          alt="Comic Page"
        />
      );
    }
  };

  const pageActual = () => {
    const currenActual = current;
    let page = localStorage.setItem("page", JSON.stringify(currenActual));
    return page;
  };
  pageActual();

  const traerPageActual = () => {
    let lastPageRead = JSON.parse(localStorage.getItem("page"));

    return lastPageRead;
  };
  traerPageActual();

  const next = () => {
    console.log(chapterStore);
    if (current >= chapterStore.chapter?.pages?.length - 1) {
      console.log("end chapter");

      const nextchaptes = chapterStore?.chapters.response.find(
        (chapter) => chapterStore?.chapter?.order + 1 === chapter.order
      );

      navigation(`/pages/${nextchaptes._id}`);
      setCurrent(0);
    }
    if (current !== chapterStore.chapter.pages?.length - 1) {
      setCurrent(current + 1);
      console.log(current);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      console.log(current);
    } else if (chapterStore.chapter?.order === 1) {
      navigation(`/comic/${chapterStore.chapter.comic_id}`);
    } else if (current === 0) {
      const prevchaptes = chapterStore.chapters.response.find(
        (chapter) => chapterStore.chapter?.order - 1 === chapter.order
      );
      navigation(`/pages/${prevchaptes._id}`);
      setCurrent(prevchaptes.pages?.length - 1);
    }
  };

  const getChapterTitle = () => {
    if (chapterStore?.chapter?.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <h2 className="titulo">
          Cap n°: {chapterStore.chapter?.order} - {chapterStore.chapter?.title}
        </h2>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="header"> </div>
      <div className="container">
        <div className="titleContainer">{getChapterTitle()}</div>
        <Anchor
          className="back"
          to={`/comic/${chapterStore.chapter?.comic_id}`}
        >
          <img className="imgBack" src="/assets/back.png" alt="" /> Back to
          Chapters
        </Anchor>
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
