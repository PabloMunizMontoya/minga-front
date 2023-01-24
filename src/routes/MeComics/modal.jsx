import React, { useRef }  from 'react';
import './modal.css'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';


const Modal = ({ isOpen, onClose }) => {

    const editSucces = () => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
      

    const dispatch = useDispatch()
    const inputTitle = useRef("");
    const inputPhoto = useRef("");
    const inputDescription = useRef("");
    const inputCategory = useRef("");
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
    <div className="modal-content">
    <form className="form" >
                  <h2 className='h2form'>Edit Comic</h2>
                <label className='labelform' htmlFor="title">
                    
                    <input
                        className="inputt"
                        type="text"
                        id="title"
                        placeholder="insert title"
                        ref={inputTitle}
                    />
                </label>
                <label className='labelform' htmlFor="photo">
                    
                    <input
                        className="inputt"
                        type="url"
                        id="photo"
                        placeholder="insert photo"
                        ref={inputPhoto}
                    />
                </label>
                <label className='labelform' htmlFor="description">
                    
                    <input
                        className="inputt"
                        type="text"
                        id="description"
                        placeholder="insert description"
                        ref={inputDescription}
                    />
                </label>
                <label className='labelform' htmlFor="category">
                    
                    <input
                        className="inputt"
                        type="text"
                        id="category"
                        placeholder="insert category"
                        ref={inputCategory}
                    />
                </label>
                <input onClick={editSucces} className="ssubmit" type="submit"value="Edit" />
                <button className="modal-close-btn" onClick={onClose}>Close</button>
            </form>
      
    </div>
  </div>
  );
}

export default Modal;