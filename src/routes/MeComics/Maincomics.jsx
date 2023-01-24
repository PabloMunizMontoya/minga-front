import React, { useEffect, useRef, useState } from "react";
import "./maincomics.css";
import ComicsCategories from "./ComicsCategories";
import { useDispatch, useSelector } from "react-redux";
import comicsActions from "../../store/comics/actions";
import ComicsCards from "./ComicsCards";
import Navbar from "../../layouts/navbar/NavBar";
import myComicsAction from "../../store/mycomics/actions";

const { getComics } = comicsActions;
const { getMycomics } = myComicsAction;

const Maincomics = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getMycomics({ token }));
  }, []);

  const myComics = useSelector((store) => store.auth.mail);

  const comicStore = useSelector((store) => store.comics.comics);
  const text = useSelector((store) => store.comics.text);
  useSelector((store) => store.comics);
  const inputCategory = useSelector(
    (store) => store.filterCategoryComic.filterCategory
  );

  const [load, setLoad] = useState(false);

  const inputText = useRef(text);

  const lengthOfComics = comicStore;

  const [pages, setPages] = useState(1);
  const next = () => {
    setPages(pages + 1);
  };
  const prev = () => {
    setPages(pages - 1);
  };

  useEffect(() => {
    dispatch(
      getComics({
        inputText: inputText.current?.value,
        inputCategory: inputCategory.join(","),

        pages: pages,
      })
    );
  }, [load, inputCategory, pages]);

  return (
    <main className="mainn">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-b">
        <div className="section2">
          <h1>{myComics}</h1>
          <div className="input-wrapper">
            <input
              ref={inputText}
              onKeyUp={() => setLoad(!load)}
              type="text"
              className="search-text-input"
              placeholder="find your comic here"
              id="search"
              defaultValue={text}
            />
          </div>
        </div>
      </div>
      <div className="comics-containerr">
        <div className="explore-container"></div>
        <ComicsCategories />
        <div className="container-cards">
          <ComicsCards />
        </div>
      </div>
    </main>
  );
};

export default Maincomics;
