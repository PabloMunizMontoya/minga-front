import React from 'react'
import './donation.css'
import { useDispatch, useSelector } from 'react-redux';
import donationActions from '../../store/mercadopago/actions';
import { useRef } from 'react';

const {donation} = donationActions


export default function DonationModal({ isOpen, onClose }) {
    const mpStore = useSelector((store) => store.donation)
    let { token } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const inputDonation = useRef()
    console.log(mpStore.mercadopago);
    if (!isOpen) {
        return null;
      }
      let donation1 = 1000
      let donation2 = 5000
      let donation3 = 10000




      const despachar = () => {
        let data = {
          unit_price: donation1
        }
        dispatch(donation({data, token}))
      }
      const despachar2 = () => {
        let data = {
          unit_price: donation2
        }
        dispatch(donation({data, token}))
      }
      const despachar3 = () => {
        let data = {
          unit_price: donation3
        }
        dispatch(donation({data, token}))
      }
      const despachar4 = (e) => {
        e.preventDefault()
        let donation4 = parseInt(inputDonation.current.value)

        let data = {
          unit_price: donation4
        }
        console.log(data)
        dispatch(donation({data, token}))
      }

  return (
    <div className='modalD-background'>
      <div className='model-content'>
        <div className='modal-container'>
          <div className='cardMp'>
            <p className='donation-title'>Make a donation</p>
            <p className='donation-number'>1.000$</p>
            <button className='donation-button' onClick={despachar}><img src="https://www.aguasbonaerenses.com.ar/img/mp.png" alt="" className='mpImage'/></button>
          </div>
          <div className='cardMp'>
            <p className='donation-title'>Make a donation</p>
            <p className='donation-number'>5.000$</p>
            <button className='donation-button' onClick={despachar2}><img src="https://www.aguasbonaerenses.com.ar/img/mp.png" alt="" className='mpImage'/></button>
          </div>
          <div className='cardMp'>
            <p className='donation-title'>Make a donation</p>
            <p className='donation-number'>10.000$</p>
            <button className='donation-button' onClick={despachar3}><img src="https://www.aguasbonaerenses.com.ar/img/mp.png" alt="" className='mpImage'/></button>
          </div>
          <div className='cardMp'>
            <p className='donation-title'>Free donation, you can donate what you want &hearts;</p>
              <input type="number" ref={inputDonation} className='donation-input' placeholder='Donation'/>
              <button onClick={despachar4} className='donation-button'><img src="https://www.aguasbonaerenses.com.ar/img/mp.png" alt="" className='mpImage'/></button>
          </div>
        </div>
        <div className='closeContainer'>
          <button onClick={onClose} className='btnClose'>Close</button>
        </div>
      </div>
    </div>
  )
}
