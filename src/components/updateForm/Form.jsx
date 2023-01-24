import React from 'react'
import { useRef} from 'react'
import '../../routes/Profile/profile.css'
import updateActions from '../../store/authorOrCompany/actions'
import { useSelector, useDispatch } from 'react-redux'
import alertActions from '../../store/alert/actions'

import { useState } from 'react'
import ModalConfirmation from './Modal-confirmation'
const {update} = updateActions
const {mingaAlert} = alertActions

export default function Form(props) {
    let {data, name} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    let { token } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const dataForm = useRef()

    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };


    const saveData = async(e) => {
        e.preventDefault()
        let form = {}
        Array.from(dataForm.current).forEach((element) => element.name && element.value && (form[element.name] = element.value))
        let response = await dispatch(update({data:form, token, name}))
        console.log(response);
        if(response.payload.response.data?.message){
            dispatch(mingaAlert(response.payload.response.data.message))
        }
        if(!response.payload.success){
            dispatch(mingaAlert(response.payload.response))
        }

      }


  return (
    <form className='formProfile' ref={dataForm} onSubmit={saveData}>
        {data.map(element => {
            if(element === "date") {
                return <input type="date" key={element} className='inputProfile' name={element} placeholder={`Change ${element}`}/>
            }else{
                return  <input type="text" key={element} className='inputProfile' name={element} placeholder={`Change ${element}`}/>
            }
    })}
        <input type="submit" value="Save" className='inputSend' />
        <button className='deleteButton' onClick={openModal}>Delete</button> 
        <ModalConfirmation isOpen={isModalOpen} name={name}/>
    </form>
  )
}
