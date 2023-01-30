import React, { useRef} from 'react'
import './newauthor.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import  alertActions from '../../store/alert/actions.js'
import Navbar from '../../layouts/navbar/NavBar'

export default function Newauthor() {
const { mingaAlert } = alertActions
const dispatch = useDispatch()
const inputName = useRef("");
const inputLastName = useRef("");
const inputCity = useRef("");
const inputCountry = useRef("");
const inputDate = useRef("");
const inputPhoto = useRef("");

let guardarData= (e) => {
  e.preventDefault();
  let data = {
    name: inputName.current.value,
    last_name:inputLastName.current.value,
    city:inputCity.current.value,
    country:inputCountry.current.value,
    date: inputDate.current.value,
    photo: inputPhoto.current.value,
    user_id: "63ac47d8b4db2f7baacad498"
  }
  axios.post("http://localhost:8000/api/authors", data)
  .then((e) =>dispatch(mingaAlert("Done")))
  .catch(error => {
    dispatch(mingaAlert(error.response.data.response))
    //dispatch(mingaAlert("Done"))
  }
  )

}
  return (
    <>
    <Navbar/>
    <div className='authorContainer'>
      <h1 className='h1Author'>New Author</h1>
    <form className='formAuthor' onSubmit = {guardarData}>
      <label >
      <input className='inputAutor' type="text"
      id='name'
      placeholder='Name'
      ref={inputName} 
      />
      </label>
      <label >
      <input className='inputAutor' type="text"
      id='lastname'
      placeholder='Last Name'
      ref={inputLastName} 
      />
      </label>

        <label>
        <input className='inputAutor' type="text"
        id='city'
        placeholder='City'
        ref={inputCity} 
      />
        </label>

        <label>
        <input className='inputAutor' type="text"
        id='country'
        placeholder='Country'
        ref={inputCountry} 
      />
        </label>

        <label>
        <input className='inputAutor' type="date"
        id='date'
        placeholder='Date'
        ref={inputDate} 
      />
        </label>

        <label>
        <input className='inputAutor' type="url"
        id='url'
        pattern="https://.*"
        placeholder='https://'
        ref={inputPhoto} 
      />
        </label>

        <label>
        <input className='buttonSubmit' type = "submit"
        id = 'button'
        value = {'create'}
      />
        </label>
    </form>
    </div>
    </>
  )
}