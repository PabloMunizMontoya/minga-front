import React from 'react'
import Navbar from '../../layouts/navbar/NavBar'
import './success.css'
import { Link as Anchor } from 'react-router-dom'

export default function SuccessPayment() {
  return (
    <div>
        <Navbar/>
        <div className='success-image-content'>
          <img src="https://i.pinimg.com/originals/17/1b/60/171b607962f42cc6a548a0157821e002.gif" alt="" className='image-thanks'/>
          <p className='thanks-text'>Thank you very much for your support!</p>
          <Anchor to={'/'} className='goBack'>Go back to home</Anchor>
        </div>
    </div>
  )
}
