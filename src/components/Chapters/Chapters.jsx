import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Chapters() {
    const [chapters, setChapters] = useState([])
    
    const obtenerChapters = async () =>{
        try{
            let response = await axios.get("http://localhost:8000/api/chapters?comic_id=63bd7d152f8c6578ed044fc5")
            let datos = response.data.response
            setChapters(datos)
            console.log(datos)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() =>{
        obtenerChapters()
    }, [])
  return (
    <div>
        <p>{chapters.map(chapter => chapter.title)}</p>

    </div>
  )
}
