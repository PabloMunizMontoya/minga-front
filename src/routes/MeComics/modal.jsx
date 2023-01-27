import React, { useRef, useEffect, useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import myComicsAction from "../../store/mycomics/actions";
import filterCategoryComicsActions from "../../store/comicCategories/actions";
import Swal from "sweetalert2";

const Modal = ({
  isOpen,
  onClose,
  data,
  reload,
  setReload,
  setIsModalOpen,
}) => {
  const { editMycomics, getMycomics } = myComicsAction;
  /*   const { filterCategoryComics = filterCategoryComicsActions
  const { categories } = useSelector((store) => store); */

  const token = localStorage.getItem("token");
  const dataForm = useRef();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const deleted = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Comics has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  /*  const data = () => {
    const inputTitle = useRef("");
    const inputPhoto = useRef("");
    const inputDescription = useRef("");
    const inputCategory = useRef("");
    return ()
  } */
  /*   const inputTitle = useRef("");
  const inputPhoto = useRef("");
  const inputDescription = useRef("");
  const inputCategory = useRef("");
 */
  if (!isOpen) {
    return null;
  }

  const saveData = async (e) => {
    e.preventDefault();
    let form = {};
    Array.from(dataForm.current).forEach(
      (element) =>
        element.name && element.value && (form[element.name] = element.value)
    );
    console.log(form);
    let response = await dispatch(
      editMycomics({ data: form, id: data._id, token })
    );
    deleted();
    setReload(!reload);
    setIsModalOpen(false);
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categories");
      setCategories(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form className="form" onSubmit={saveData} ref={dataForm}>
          <h2 className="h2form">Edit Comic</h2>
          {console.log(data)}
          <label className="labelform" htmlFor="title">
            <input
              name="title"
              defaultValue={data.title}
              className="inputt"
              type="text"
              id="title"
              placeholder="insert title"
            />
          </label>
          <label className="labelform" htmlFor="photo">
            <input
              name="photo"
              defaultValue={data.photo}
              className="inputt"
              type="url"
              id="photo"
              placeholder="insert photo"
            />
          </label>
          <label className="labelform" htmlFor="description">
            <input
              name="description"
              defaultValue={data.description}
              className="inputt"
              type="text"
              id="description"
              placeholder="insert description"
            />
          </label>
          <select className="selsects" name="category" > 
            {categories?.map((category, index) => ( 
              <option className="opt"
                defaultValue={data.category.name}
                key={index}
                value={category._id}
                id={category.name}>
                {category.name}
              </option>
              
            ))}
             <option className="opt"
                defaultValue={data.category.name}
                key={data.index}
                value={data.category._id}
                id={data.category.name}>
                {data.category.name}
              </option>
            {console.log(data.category.name)}
          </select>

          <input
            onClick={saveData}
            className="ssubmit"
            type="submit"
            value="Edit"
          />
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
