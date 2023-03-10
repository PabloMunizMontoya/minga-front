import React, { useState } from 'react'
import { Link as Anchor } from "react-router-dom";
import './navcomics.css'
/* import logo1 from './public/assets/logo1.png' */


export default function Nav() {
  const [variable, setVariable] = useState(false);
  const handleMenu = () =>{
    setVariable(!variable)
  }

  return (
    <nav >
     
    <Anchor to={"/"}><img className='imgLogo' src="/assets/logo1.png" alt="" /></Anchor>
 
    <button onClick={handleMenu} className="menuButton">Menu</button>
        {
          variable
          ?
          (
            <nav className="activo">
              <div className="navItems">
              <Anchor className='items' to={"/"}>Home</Anchor>
              <Anchor className='items'  to={"/my-comics"}>My comics</Anchor>
              <Anchor className='items'  to={"/new-author"}>New Author</Anchor>
              <Anchor className='items'  to={"/new-cia"}>New Company</Anchor>
              <Anchor className='items'  to={"/new-comic"}>New Comic</Anchor>
              <Anchor className='items'  to={"/new-chapter"}>New Chapter</Anchor>              
              <Anchor className='items'  to={"/"}>Logout</Anchor>
              <Anchor className='items'  to={"/comics"}>comics</Anchor>
              
              </div>
          </nav>
          )
          :
        <div className="none">
          <a href="#">Home</a>
          <a href="#">My comics</a>
          <a href="#">Logout</a>
        </div>
        }

    <a className="login-button" href="#">Sing in</a>   
 

  </nav>
  )
}

