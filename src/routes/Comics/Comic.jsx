import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Chapters from '../../components/Chapters/Chapters.jsx';
import comicAction from '../../store/comic/actions.js';
import { useParams } from 'react-router-dom';
import './comic.css'

const {getComic} = comicAction

export default function Comic() {
  const comicStore = useSelector(store => store.comics)
  const dispatch = useDispatch()


  const [comics, setComics] = useState([]) 
  const [chapter, setChapter] = useState(false)
  const handleChapters = () => {
    setChapter(!chapter)
  }

useEffect(() => {
  dispatch(getComic(id))
},[])
const {id} = useParams()
  return (
    <div>
      <div className='content'>
        {comicStore.comics.response?.title}

      <img className='comicImage' src={comicStore.comics.response?.photo} alt="" />
      <button onClick={handleChapters}>Chapter</button>
      {
        chapter
        ?
        (<Chapters/>)
        :
          null
      }
      <p className='description'>{comics.description}</p>

      </div>
    </div>
  )
}


/*   const obtenerComic = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/comics');
      let datos = response.data.response
      console.log(datos)
      setComics(datos)
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    obtenerComic()
  }, [])
  console.log(comics) */