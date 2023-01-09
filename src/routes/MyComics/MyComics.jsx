import React from 'react'
import './mycomics.css'
import { Link as Anchor } from "react-router-dom";

export default function MyComics() {
  return (
    <div>
    <div className='my-comics-container'>
        <h1 className='title-my-comics'>MyComics</h1>
        
    </div>
    <div className='button-container'>
        <div className='button-card'>
            <div className='container-info-card-button'>
                <Anchor to={"/new-comic"} ><img src="/assets/plus.png"  className='logos' alt=""/></Anchor>    
        <Anchor to={"/new-comic"}  className='submit-1'>Add Comic</Anchor>
            </div>
        
        

            
        </div>
        
    </div>
    </div>
  )
}
