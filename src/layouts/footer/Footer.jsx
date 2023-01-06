import React from 'react'
import './footer.css'
import { Link as Anchor } from 'react-router-dom'
export default function Footer() {
  return (
    <div>          
    <footer>
      <div className='background-footer'>

      </div>
      <div className='footer1'>
      <p className='subs'>Suscribite</p>
      <div>
      <input type="email" className='input' placeholder='Enter your email'/>
      <input type="submit" className='submit' value='Submit'/>
      </div>
      </div>
      <div className='footer2'>
      <div className='info'>
        <a >About Us</a>
        <a>Comics</a>
        <a>Mangas</a>
      </div>
      <div className='links'>
        <a><img src="/assets/messenger.png"  className='logos' alt=""/></a>
        <a><img src="/assets/twitter.png"  className='logos' alt=""/></a>
        <a><img src="/assets/vimeo.png"  className='logos' alt=""/></a>
        <a><img src="/assets/youtube.png"  className='logos' alt=""/></a>
      </div>
      </div>
      <div className='footer3'>
      <div>
        <p>© 2022 Minga. Todos los derechos reservados.</p>
      </div>
      <div>
      </div>
      <div>
      <p>Terminos y Condiciones</p>
        <p>Politica de privacidad</p>
      </div>
      </div>
  </footer>
  </div>
  )
}
