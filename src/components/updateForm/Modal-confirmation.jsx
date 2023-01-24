import React from 'react';
import './modalconfirm.css'
import { Link as Anchor } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import updateActions from '../../store/authorOrCompany/actions'
const {disable} = updateActions

const ModalConfirmation = ({ isOpen, name }) => {
    const dispatch = useDispatch()
    let { token } = useSelector(store => store.auth)
  if (!isOpen) {
    return null;
  }
  const disableAccount = () => {
    dispatch(disable({token, name, active:false}))
  }
  return (
    <div className="modal-background">
    <div className="modalconfirm-content">
    <h2 className='modal-legend'>Are you sure you want to delete your account?</h2>
    <p className='modal-text'>If you delete your account you will not be able to access the creation of your comics or your list of comics</p>
    <Anchor className='btn-confirm-delete' onClick={disableAccount} to={"/"}>Confirm Delete</Anchor>
    </div>
  </div>
  );
}

export default ModalConfirmation;