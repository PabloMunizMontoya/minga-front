import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Chapters from '../../components/Chapters/Chapters.jsx';
import comicAction from '../../store/comic/actions.js';
import { useParams } from 'react-router-dom';
import NavBar from '../../layouts/navbar/NavBar'
import './comic.css'

const {getComic} = comicAction

export default function Comic() {
  const comic = useSelector(store => store.comic)
  const dispatch = useDispatch()
  
  const [chapter, setChapter] = useState(false)
  const handleChapters = () => {
    setChapter(true)
  }
  const handleManga = () => {
    setChapter(false)
  }
useEffect(() => {
  console.log(comic)
  if(comic.comics.length === 0){
    dispatch(getComic(id))
  }
},[])
const {id} = useParams()
  return (
    <>
    <NavBar/>
    <div>
     
      <div className='content'>
      <img className='comicImage' src={comic.comics.response?.photo} alt="" />
      <div className='titlecenter'>
      <h2 className='title'>{comic.comics.response?.title}</h2>
      </div>
{/*       <div className='emojis'>
      <button className='emoji'>&#128077;</button>
      <button className='emoji'>&#128078;</button>
      <button className='emoji'>&#128558;</button>
      <button className='emoji'>&#128525;</button>
      </div> */}
      <div className='buttons'>
      {
        chapter ? <button onClick={handleManga} className='btn-white'>Manga</button>
        :       <button onClick={handleManga} className='btn-blue'>Manga</button>
      }
      {
        chapter ? <button onClick={handleChapters} className='btn-blue' >Chapter</button>
        :       <button onClick={handleChapters} className='btn-white' >Chapter</button>
      }
      </div>

      {
        chapter
        ?
        (<Chapters/>)
        :
        <div className='descriptioncontent'>
          <h2 className='title'>Manga synopsis</h2>
          <p className='description'>{comic.comics.response?.description}</p>
        </div>
      }
      </div>
    </div>
    </>
  )
}