import React, { useEffect, useState } from "react";
import "./comicscards.css";
import {useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import myComicsAction from '../../store/mycomics/actions'
import Swal from 'sweetalert2';

const ComicsCards = () => {
  const { getMycomics } = myComicsAction
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const deleted = () => {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Your Comics has been delete',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  const handleClick = () => {
    Swal.fire({
        title: "Delete",
        text: "Are you sure?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "Cancel",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            deleted()
            console.log("*se elimina la venta*");
        } else {
            // Dijeron que no
            console.log("*NO se elimina la venta*");
        }
    });
  };

  const token = localStorage.getItem("token")

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMycomics({token}));
  }, []);

  const  {myComics}  = useSelector((store) => store.myComic);

  return (
    <>
      {myComics?.map((card, index) => {
        return (
          <div className="card">
            <div className="rectangle"></div>
            <div className="textCard">
              <h2 className="tittleCard">{card.title}</h2>
              <p className="categoryText">{"category"}</p>
              <div>
                <button className="butonEdit" onClick={openModal}>Edit</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <button className="butonDelete" onClick={handleClick}>Delete</button>
              </div>
            </div>
            <div className="divCard">
              <img className="imagen-card" src={card.photo} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComicsCards;
