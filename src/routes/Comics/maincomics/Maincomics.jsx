import React, { useEffect, useRef, useState } from "react";
import "./maincomics.css";
import ComicsCategories from "../../../components/comics/ComicsCategories";
import { useDispatch, useSelector } from "react-redux";
import comicsActions from "../../../store/comics/actions";
import ComicsCards from "../../../components/comics/ComicsCards";
import Navbar from "../../../layouts/navbar/NavBar";
const { getComics } = comicsActions;

const Maincomics = () => {
    const comicStore = useSelector((store) => store.comics.comics);
    console.log(comicStore);
    const text = useSelector((store) => store.comics.text);
    useSelector((store) => store.comics);
    const inputCategory = useSelector(
        (store) => store.filterCategoryComic.filterCategory
    );

    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const inputText = useRef(text);

    const lengthOfComics = comicStore;
    console.log(lengthOfComics);

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

    /*    const seeMore = () => {
         const limit = comicStore.comics?.comics.length
         dispatch(
            getComics({
                inputText: inputText.current.value,
                inputSort,
                inputCategory: inputCategory.join(","),
                inputLimit: limit + 5,
            })
         )
     }
    
     const boton =() => {
         const limit = comicStore.comics?.comics?.length
         if (limit === 34){
             return <div className="noMore"> No More Comics</div>
         }else{
            return (
                 <button onClick={seeMore} className="buttonSeemore">See More</button>
             )
         }
 } */

    return (
        <main className="main">
            <div className="nav">
            <Navbar/>
            </div>
            <div className="main-background">
                <div className="section2">
                    <h1>COMICS</h1>
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
            <div className="comics-container">
                <div className="explore-container">
                    <h2>Explore</h2>
                </div>
                <div className="ranges-container">
                    <div className="ranges-1">
                        <p>Adventures</p>
                    </div>
                    <div className="ranges-2">
                        <p>Nostalgic</p>
                    </div>
                    <div className="ranges-3">
                        <p>Popular</p>
                    </div>
                </div>
                
                    <ComicsCategories />
                
                <div className="container-cards">
                    <ComicsCards />
                </div>
                <div className="container-button">
                    <div>
                        {pages === 1 ? null : (
                            <button onClick={prev} className="botonnextprev">
                                prev
                            </button>
                        )}
                    </div>
                    <div>
                        {lengthOfComics?.length < 10 ? null : (
                            <button onClick={next} className="botonnextprev">
                                next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Maincomics;
