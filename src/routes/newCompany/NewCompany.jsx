import './newcompany.css'
import React, { useRef } from 'react'
import axios from 'axios'
import  alertActions from '../../store/alert/actions.js'
import { useDispatch } from 'react-redux'

const NewCompany = () => {
  const {mingaAlert} = alertActions
  const dispatch = useDispatch()
  const inputName = useRef("")
  const inputLogo = useRef("")
const inputWebsite = useRef("")
const inputDescription = useRef("")
const inputId = useRef("")

 let guardarData = (element) =>{
   element.preventDefault()
   let data = {     
    name: inputName.current.value,
    logo: inputLogo.current.value,
     website: inputWebsite.current.value,
     description: inputDescription.current.value,
     user_id: inputId.current.value
   }
        
      axios.post("http://localhost:8000/api/companies", data)
            .then((e) => dispatch(mingaAlert("Done")))
            .catch(error => { dispatch(mingaAlert(error.response.data.response))
            // dispatch(mingaAlert("Done"))
            console.log(error.response.data.response) 
             })

  }

  return (
    <form className='form' onSubmit={guardarData}>
        <h2>New company</h2>
        <div>
             <label htmlFor='name'>
            <input ref={inputName} className='form-item' type="text" id="name" placeholder='Insert your name'/>
        </label>
        </div>
        <div>
        <label htmlFor='logo'>
            <input ref={inputLogo} className='form-item' type="url" id="website" placeholder='Logo´s URL'/>
        </label>
       </div>
       <div>
        
        <label htmlFor='website'>
            <input ref={inputWebsite} className='form-item' type="url" id="website" placeholder='Company´s URL'/>
        </label>
       </div>
        
        <div>
            <label htmlFor='description'>
            <input ref={inputDescription} className='form-item' type="textarea" id="description" placeholder='Insert a description'/>
        </label>
        </div>
        <div>
              <label htmlFor='user_id'>
            <input ref={inputId} className='form-item' type= "string" id="user_id" placeholder='Your user ID goes here'/>
        </label>
        </div>
        
      <div className='container-button'>
      <input className='button' type="submit" id="send"  value="Send"/>
      </div>
        
    </form>
  )
  }


export default NewCompany