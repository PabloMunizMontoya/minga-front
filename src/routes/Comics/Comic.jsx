import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Chapters from '../../components/Chapters/Chapters.jsx';
import comicAction from '../../store/comic/actions.js';
import { useParams } from 'react-router-dom';
import './comic.css'

const {getComic} = comicAction

export default function Comic() {
  const comics = useSelector(store => store.comics)
  const dispatch = useDispatch()


  const [chapter, setChapter] = useState(false)
  const handleChapters = () => {
    setChapter(true)
  }
  const handleManga = () => {
    setChapter(false)
  }
useEffect(() => {
  console.log(comics)
  if(comics.comics.length === 0){
    dispatch(getComic(id))
  }
},[])
const {id} = useParams()
  return (
    <div>
      <div className='content'>
      <img className='comicImage' src={comics.comics.response?.photo} alt="" />
      <div className='titlecenter'>
      <h2 className='title'>{comics.comics.response?.title}</h2>
      </div>
      <div className='emojis'>
      <button className='emoji'>&#128077;</button>
      <button className='emoji'>&#128078;</button>
      <button className='emoji'>&#128558;</button>
      <button className='emoji'>&#128525;</button>
      </div>
      <div className='buttons'>
      <button onClick={handleManga} className='btn'>Manga</button>
      <button onClick={handleChapters} className='btn' >Chapter</button>
      </div>

      {
        chapter
        ?
        (<Chapters/>)
        :
          <p className='description'>{comics.comics.response?.description}</p>
      }
      </div>
    </div>
  )
}