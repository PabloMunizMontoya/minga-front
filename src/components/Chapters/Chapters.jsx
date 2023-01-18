import React from "react";
import { useState, useEffect } from "react";
import "./chapters.css";
import chapterAction from "../../store/chapter/actions";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import comicAction from "../../store/comic/actions";
/* import { useSearchParams } from 'react-router-dom' */

const { getComic } = comicAction;
const { getChapter } = chapterAction;
export default function Chapters() {
  const chapters = useSelector((store) => store.chapters.chapters);
  const comic = useSelector((store) => store.comic);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [pages, setPages] = useState(1);
  let capitulos = chapters.response;
  console.log(capitulos);

  console.log(pages);

  const next = () => {
    setPages(pages + 1);
  };
  const prev = () => {
    setPages(pages - 1);
  };
  useEffect(() => {
    if (chapters.length === 0) {
      dispatch(getChapter({ id, pages }));
      dispatch(getComic(id));
      console.log(chapters);
    } else {
      dispatch(getChapter({ id, pages }));
    }
  }, [pages]);
  return (
    <div className="content">
      {chapters.response?.length === 0 ? (
        <div className="sorrycontent">
          <h2 className="sorry">Sorry, this manga has no chapters</h2>
        </div>
      ) : (
        <div>
          {chapters.response?.map((chapter) => (
            <div className="chaptercontent" key={chapter.order}>
              <img
                className="imagecard"
                src={comic.comics.response?.photo}
                alt=""
              />
              <p className="titlechapter">{chapter.title}</p>
              <div className="anchorcontainer">
                <Anchor to={`/pages/${chapter._id}`} className="Anchor">
                  Read
                </Anchor>
              </div>
            </div>
          ))}
          <div className="pagination">
            <div>
              {pages === 1 ? null : (
                <button className="nextbtn" onClick={prev}>
                  Prev
                </button>
              )}
            </div>
            <div>
              {capitulos?.length < 5 ? null : (
                <button className="nextbtn" onClick={next}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
