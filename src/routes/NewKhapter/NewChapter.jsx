import axios from 'axios'
import { useDispatch } from 'react-redux'
import  alertActions from '../../store/alert/actions.js'
import React, {useRef}  from 'react'
import './chapters.css'

export default function NewChapter() {
  const {mingaAlert} = alertActions
  const dispatch = useDispatch()
  const inputTitle = useRef('')
  const inputPage = useRef('')
  const inputOrder = useRef('')

  const saveData = (e)  => {
    e.preventDefault()
      let datos = {
        comic_id: "63b6e9aa19323890c4bd6bb2",
        title: inputTitle.current.value,
        pages: inputPage.current.value.split(',').map(element => element.trim()),
        order: inputOrder.current.value
      }
      axios.post("http://localhost:8000/api/chapters", datos)
      .then( res =>  dispatch(mingaAlert("Done")) )
      .catch(error => {

        /* DESPACHA LA ALERTA */

        dispatch(mingaAlert(error.response.data.response))
/*         console.log(error.response.data.response) */
        //utilizo el hook useDispatch para despachar los errores hacia la accion
      })
  }
  return (
    <div className='chapters'>
        <h2 className='legend'>New Chapter</h2>
        <form onSubmit={saveData} className='form' >
        <input type="text" className='input' ref={inputTitle} placeholder='Enter your title' />
        <input type="text" className='input' ref={inputPage} placeholder='Enter your chapters'/>
        <input type="number" className='input' ref={inputOrder} placeholder='Enter your page order'/>
        <input type="submit" className='submit' value="Submit" />
        </form>
    </div>
  )
}
