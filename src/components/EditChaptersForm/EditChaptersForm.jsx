import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import React from 'react'
import InputComic from '../InputComic/InputComic'
import InputChapter from '../inputChapter/inputChapter'
import './editchaptersform.css'
import InputData from '../inputData/inputData'
import chapterActions from '../../store/chapter/actions'
import RenderInfoChapter from "../RenderInfoChapter/RenderInfoChapter";

const EditChaptersForm =() => {

  const chaptersStore = useSelector(
    (state) => state?.chapters.chapters.response
  );
   console.log(chaptersStore);

  const inputData = useRef("");
  const inputCategory = useRef("");
  const [category, setCategory] = useState("");
  const { editChapter } = chapterActions;

  const dispatch = useDispatch();

  const getValueCategory = (e) => {
    setCategory(e.target.value);

  };

  const editsChapter = async (e) => {
    e.preventDefault();

    const chapter = {
      comic_id: chaptersStore.comic_id,
      id: chaptersStore._id, 
      title: chaptersStore.title,
      order: chaptersStore.order,
      data: inputData.current.value,
      category: category,
    }; 
    await dispatch(editChapter(chapter));
    await dispatch(chaptersStore._id)
  }; 

  return (
    <div className='container'>
      <div className="divContainerForm">
        <h2 className='legend'>Edit Chapters</h2>
        <form  className='formNewComic' >
            <InputComic/>
            <InputChapter/>
            <InputData/>
            <div>
            <select name="categories" className="inpFormSelect"  onChange={getValueCategory} >
              <option className="default-select">
                Selec data
              </option>
              <option value="title">Title</option>
              <option value="pages">Pages</option>
              <option value="order">Order</option> 
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="data to edit"
              className="inpFormSelect"
              ref={inputData}
            ></input>
          </div>
            
            <input type="submit" className='button_edit' value="Edit" onClick={editsChapter} />
            <input type="submit" className='button_delete' value="Delete" />
        </form>
        </div>
        <div className="">
        <div className="chapter">
     <RenderInfoChapter />
        </div>
  </div>
    </div>
    
    
    

  )
}

export default EditChaptersForm