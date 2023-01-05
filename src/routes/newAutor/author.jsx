import React, { useRef} from 'react'
import './author.css'
import axios from 'axios'

export default function Newauthor() {
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
      photo:inputPhoto.current.value,
      user_id: "63ac47d8b4db2f7baacad498"
   /* name:inputName.current.value,
    last_name:inputLastName.current.value,
    city:inputCity.current.value,
    country:inputCountry.current.value,
    date:inputDate.current.value,
    photo:inputPhoto.current.value,
    user_Id:"63ac47d8b4db2f7baacad498",*/
  }
  axios.post("http://localhost:8000/api/authors", data)
  .then(e =>console.log(e))
  .catch(error => console.log(error))

}
  return (
    <div>
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
  )
}
