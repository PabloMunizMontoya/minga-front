import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link as Chapter } from 'react-router-dom';

export default function Comic() {
  const [comics, setComics] = useState([]) 


  const obtenerComic = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/comics/63bd7d152f8c6578ed044fc5');
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
  console.log(comics)
  return (
    <div>
      {comics.title}
      <img src={comics.photo} alt="" />
      {comics.description}
      <Chapter to={"/chapters"}>Chapter</Chapter>
    </div>
  )
}
