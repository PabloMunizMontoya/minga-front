import React from "react";
import "./comics.from.company.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import comicActions from "../../store/ComicsFromCompany/actions";
import FilterCategory from "./FIlterCategory";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/navbar/NavBar";
const { obtenerComics } = comicActions;

const ComicsFromCompany = () => {
  //  useSelector(store => console.log(store))
  const dispatch = useDispatch();
  // const {traerComicsdeCategory} = traerComicsdeCategoryActions
  const [pages, setPages] = useState(1);

  const comics = useSelector((store) => store.comicComp.comics);
  const category = useSelector(
    (store) => store.comicsFromCategoryReducer.categoriesFromAuthor
  );
  const { id } = useParams();
  //console.log(id);
  //console.log(category);
  const [categories, setCategories] = useState([]);
  const data = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categories");
      setCategories(response.data.response);
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    dispatch(obtenerComics({ company: id, category: category, pages }));
    // en lugar de pasar el harcodeado pasar variable category
  }, [category]); // adentro del corchete agregar el parametro que cada vez que cambie ejecuta el efecto(parametro : category)

  useEffect(() => {
    dispatch(obtenerComics({ company: id, category: category, pages }));
  }, [pages]);
  const lengthOfComics = comics;
  console.log(lengthOfComics);
  console.log(pages);
  const next = () => {
    setPages(pages + 1);
  };
  const prev = () => {
    setPages(pages - 1);
  };

  return (
    <>
      <Navbar />
      <main className="main">
        <div className="main-background">
          <div className="section2">
            <h1>COMPANY</h1>
          </div>
        </div>
        

        <div className="wrap">
        <div className="conteiner-buttons">
            {categories.map((cat, index) => (
              <FilterCategory cat={cat} key={index} />
            ))}
          </div>
          
          {comics?.map((card, index) => {
            return (
                <div className="contains">
              <div key={index} className="conteiner-1">
                <div className="border-conteiner-1">
                  <div className="left-conteiner">
                    <h2 className="h2card">{card.title}</h2>
                 
                  </div>
                  <div>
                    <input
                      className="buttons-edit"
                      type="button"
                      value="Edit"
                    />
                    <input
                      className="buttons-delete"
                      type="button"
                      value="Delete"
                    />
                  </div>
                </div>
                <div className="rigth-conteiner">
                  <img className="img-card" src={card.photo} />
                </div>
                </div>
              </div>
            );
          })}

          <div className="conteinerButtonsPagination">
            {pages === 1 ? null : (
              <button className="buttonPagination" onClick={prev}>
                prev
              </button>
            )},
            {lengthOfComics?.length < 1 ? null : (
              <button className="buttonPagination" onClick={next}>
                next
              </button>
            )}
          </div>
         
        </div>
      </main>
    </>
  );
};

export default ComicsFromCompany;
