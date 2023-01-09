
import React, { useRef } from "react";
import "./newcomic.css";
import axios from "axios";
import  alertActions from '../../store/alert/actions.js'
import { useDispatch } from 'react-redux'

const NewComic = () => {
    const {mingaAlert} = alertActions
    const dispatch = useDispatch()
    const inputAuthorId = useRef("");
    const inputCompanyId = useRef("");
    const inputTitle = useRef("");
    const inputPhoto = useRef("");
    const inputDescription = useRef("");
    const inputCategory = useRef("");

    let storeData = (e) => {
        e.preventDefault();

        let data = {
            author_id: "63ac47d8b4db2f7baacad498",
            company_id: "63b487b8a20665822fca8992",
            title: inputTitle?.current?.value,
            photo: inputPhoto?.current?.value,
            description: inputDescription?.current?.value,
            category: "63b3890c7516fb05c60d3239",
        };
        axios
            .post("http://localhost:8000/api/comics", data)
            .then((e) => dispatch(mingaAlert("Done")))
            .catch(error => {

               
        
            dispatch(mingaAlert(error.response.data.response))
            // dispatch(mingaAlert("Done"))
            console.log(error.response.data.response) 
                
              })


    };

    return (
        <div className="chapters">
            <h2 className="legend">NEW COMIC</h2>

            <form className="form" onSubmit={storeData}>
                <label htmlFor="author_id">
                    
                    <input
                        className="input"
                        type="text"
                        id="author_id"
                        placeholder="insert Author id"
                        ref={inputAuthorId}
                    />
                </label>
                <label htmlFor="company_id">
                    
                    
                    <input
                        className="input"
                        type="text"
                        id="company_id"
                        placeholder="insert Company Id"
                        ref={inputCompanyId}
                    />
                </label>
                <label htmlFor="title">
                    
                    <input
                        className="input"
                        type="text"
                        id="title"
                        placeholder="insert title"
                        ref={inputTitle}
                    />
                </label>
                <label htmlFor="photo">
                    
                    <input
                        className="input"
                        type="url"
                        id="photo"
                        placeholder="insert photo"
                        ref={inputPhoto}
                    />
                </label>
                <label htmlFor="description">
                    
                    <input
                        className="input"
                        type="text"
                        id="description"
                        placeholder="insert description"
                        ref={inputDescription}
                    />
                </label>
                <label htmlFor="category">
                    
                    <input
                        className="input"
                        type="text"
                        id="category"
                        placeholder="insert category"
                        ref={inputCategory}
                    />
                </label>
                <input className="submit" type="submit"value="Add new comic" />
            </form>
        </div>
    );
};

export default NewComic