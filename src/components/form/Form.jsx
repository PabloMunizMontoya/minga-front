import './form.css'
import React from 'react'


const Form = () => {
  return (
    <form className='form'>
        <h2>New company</h2>
        <div>
             <label htmlFor='name'>
            <input className='form-item' type="text" id="name" placeholder='Insert your name'/>
            
        </label>
        </div>
       
       <div>
        <label htmlFor='website'>
            <input className='form-item' type="url" id="website" placeholder='Company´s URL'/>
        </label>
       </div>
        
        <div>
            <label htmlFor='description'>
            <input className='form-item' type="textarea" id="description" placeholder='Insert a description'/>
        </label>
        </div>
        <div>
              <label htmlFor='user_id'>
            <input className='form-item' type= "string" id="user_id" placeholder='Your user ID goes here'/>
        </label>
        </div>
        
      <div className='container-button'>
      <input className='button' type="submit" id="send"  value="Send"/>
      </div>
        
    </form>
  )
}

export default Form