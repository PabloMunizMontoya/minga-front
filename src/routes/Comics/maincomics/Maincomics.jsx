
import React, {useEffect} from "react";

import "./maincomics.css";

import  ComicsCategories  from "../../../components/comics/ComicsCategories";

import { useSelector, useDispatch } from "react-redux";

import comicsActions from "../../../store/comics/actions";

const {getComics} = comicsActions

 const Maincomics =()  =>{
    const {comics} = useSelector(store=> store.comics)

    const dispatch = useDispatch
    const inputText = ""
    const inputCategory = ""
    const inputSort = ""


    useEffect( () => {
            if (comics.length) {
                dispatch(getComics({inputText,inputSort,inputCategory}))
            }    
    },[])
    
    return ( 
        <main>
            <div className="main-background">
                <div className="section2">
                    <h1>COMICS</h1>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="search-text-input"
                            placeholder="find your comic here"
                        />
                    </div>
                </div>
                
            </div>
            <div className="comics-container">
                <div className="explore-container">
                    <h2>
                        Explore
                    </h2>
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
                <div className="categories-container">
                    <ComicsCategories/>
                </div>
                
            </div>
        </main>
    );
}

export default Maincomics