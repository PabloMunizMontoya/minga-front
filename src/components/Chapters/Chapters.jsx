import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './chapters.css'
import chapterAction from '../../store/chapter/actions'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const {getChapter} = chapterAction
export default function Chapters() {
    const chapterStore = useSelector(store => console.log(store?.chapters))
    const dispatch = useDispatch()    
    const {id} = useParams()

    console.log(chapterStore)

    useEffect(() => {
        dispatch(getChapter(id))
    }, [])
  return (
    <div className='content'>
        
    </div>
  )
}
