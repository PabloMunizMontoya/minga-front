import React, { useEffect, useState } from "react";
import "./comicscards.css";

import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import myComicsAction from "../../store/mycomics/actions";
import Swal from "sweetalert2";
import axios from "axios";



const ComicsCards = ({data , reload , setReload}) => {
  const { getMycomics /* , deleteMycomics */, editMycomics } = myComicsAction;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const token = localStorage.getItem("token");

  const myComics  = useSelector((store) => store);
  console.log(myComics);
  

  const deleted = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Comics has been delete",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const deleteComics = async (id) => {
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:8000/api/comics/${id}`, headers);
      /*  dispatch(deleteMycomics({token})); */
      dispatch(getMycomics({ token }));
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleClick = (e) => {
    Swal.fire({
      title: "Delete",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
    }).then((resultado) => {
      if (resultado.value) {
        // Hicieron click en "Sí"
        deleteComics(e.target.value);
        deleted();
      } else {
        // Dijeron que no
        console.log("*Comics not delete*");
      }
    });
  };
  useEffect(() => {
    dispatch(getMycomics({ token }));
  }, []);


  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <>
      
          <div className="card">
            <div className="rectangle"></div>
            <div className="textCard">
              <h2 className="tittleCard">{data.title}</h2>
              <p className="categoryText">{data.category.name}</p>
              <div className="buttoncards">
                <button className="butonEdit" onClick={openModal}>
                  Edit
                </button>
    
                {isModalOpen &&<Modal setIsModalOpen={setIsModalOpen}  reload={reload} setReload={setReload} data={data} isOpen={isModalOpen} onClose={closeModal} />}
                <button
                  className="butonDelete"
                  value={data._id}
                  onClick={handleClick}>
                  Delete
                </button>
              </div>
            </div>
            <div className="divCard">
              <img className="imagen-card" src={data.photo} alt="" />
            </div>
          </div>

    </>
  );
};

export default ComicsCards;
