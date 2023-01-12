import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './chapters.css'
import chapterAction from '../../store/chapter/actions'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const {getChapter} = chapterAction
export default function Chapters() {
    const chapterStore = useSelector(store => store.chapters)
    const dispatch = useDispatch()    
    const {id} = useParams()
    console.log(id)



    useEffect(() => {
        dispatch(getChapter(id))
        console.log(chapterStore)
    }, [])
  return (
    <div className='content'>
        <h1>hello world</h1>
        {chapterStore.chapters.response?.map(chapter => chapter.title)}
    </div>
  )
}
