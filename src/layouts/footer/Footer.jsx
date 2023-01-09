import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
    <footer>
      <div className='background-footer'>
      </div>
      <div className='footer1'>
      <p className='subs'>Subscribe</p>
      <div className='inputdiv'>
      <input type="email" className='input' placeholder='Enter your email'/>
      <input type="submit" className='submit' value='Submit'/>
      </div>
      </div>
      <div className='footer2'>
      <div className='info'>
        <a className='anchorFooter' >About Us</a>
        <a className='anchorFooter'>Comics</a>
        <a className='anchorFooter'>Mangas</a>
      </div>
      <div className='links'>
        <a><img src="/assets/messenger.png"  className='logos' alt=""/></a>
        <a><img src="/assets/twitter.png"  className='logos' alt=""/></a>
        <a><img src="/assets/vimeo.png"  className='logos' alt=""/></a>
        <a><img src="/assets/youtube.png"  className='logos' alt=""/></a>
      </div>
      </div>
        <div className='footer3'>
          <div className='copyright'>
            <p className='pCopyright'>© 2022 Minga. All rights reserved.</p>
          </div>
          <div className='terms'>
           <p className='pFooter'>Terms and Conditions</p>
          <p className='pFooter'>Privacy Policy</p>
        </div>
      </div>
  </footer>
  </div>
  )
}