import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";


import "./inputcomics.css";
import allComicsActions from "../../store/getAllComics/action.getAllComics.js"
import getIdComicActions from "../../store/getIdAction/getIdAction.js"
const { getIdComic, getComicsById  } = getIdComicActions;
const { getAllComics }=  allComicsActions

const InputComic = () => {
    const  allcomics  = useSelector((store) => store?.response?.allComics)
    

    const [idComic, setIdComic] = useState("");
    // console.log(idComic)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComics({

        }));
    }, []);

    const getValueComic = (e) => {
        setIdComic(e.target.value);
        dispatch(getIdComic(idComic));
      };

      useEffect(() => {
        dispatch(getAllComics());
      }, []);

      useEffect(() => {
        dispatch(getIdComic(idComic));  
      }, [idComic]);

    return (
        <>
            <div className="container-comp-input">
                {/* <select name="categories"onChange={getValueComic} className = "inpFormSelect"
                 id="categories">
                    <option>
                        Select Comic
                    </option>
                    { allcomics?.allcomics?.map((comics) => {
                        return (
                            <option 
                             
                            className="desplegalbe-all-comics" value={comics._id}>
                                {comics.title}
                            </option>
                        )
                    }) }
                </select> */}
            </div>
        </>
    );
};
export default InputComic;
