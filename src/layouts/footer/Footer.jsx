import React from 'react'
import './footer.css'
import { useState } from 'react';
import DonationModal from '../../components/mercadopago/DonationModal';
import { useSelector } from 'react-redux';

export default function Footer() {
  let { is_online } = useSelector(store => store.auth)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <a className='footer-links'>About us</a>
        <a className='footer-links'>Comics</a>
        <a className='footer-links'>Mangas</a>
      </div>
      <div className='links'>
        <div className='logosLinks'>
        <a><img src="/assets/messenger.png"  className='logos' alt=""/></a>
        <a><img src="/assets/twitter.png"  className='logos' alt=""/></a>
        <a><img src="/assets/vimeo.png"  className='logos' alt=""/></a>
        <a><img src="/assets/youtube.png"  className='logos' alt=""/></a>
        </div>
        {is_online ? 
                <div className='donationContainer'>
                <button className="donation" onClick={openModal}>Donation <p className='corazon'>&hearts;</p></button>
                  <DonationModal  isOpen={isModalOpen} onClose={closeModal} />
                </div>
                :
                null
                }
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