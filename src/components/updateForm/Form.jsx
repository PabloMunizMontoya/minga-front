import React from 'react'
import { useRef} from 'react'
import '../../routes/Profile/profile.css'
import updateActions from '../../store/authorOrCompany/actions'
import { useSelector, useDispatch } from 'react-redux'
import alertActions from '../../store/alert/actions'
import { useState } from 'react'
import ModalConfirmation from './Modal-confirmation'

const {mingaAlert} = alertActions
const {update} = updateActions

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
/*         console.log(response.payload.success); */
        console.log(response.payload.response.data)
        if(response.payload.response.data?.success){
          let messages = response.payload.response.data.message
          dispatch(mingaAlert({messages, success:true}))
        }
        if(!response.payload.success){
          let messages = (typeof response.payload.response === "string") ? response.payload.response : response.payload.response?.map(element => element.message)
          dispatch(mingaAlert({messages, success:false}))
        }
      }


  return (
    <>
    <form className='formProfile' ref={dataForm} onSubmit={saveData}>
        {data.map(element => {
            if(element === "date") {
                return <input type="date" key={element} className='inputProfile' name={element} placeholder={`Change ${element}`}/>
            }else{
                return  <input type="text" key={element} className='inputProfile' name={element} placeholder={`Change ${element}`}/>
            }
    })}
        <input type="submit" value="Save" className='inputSend' />
        <ModalConfirmation isOpen={isModalOpen} name={name}/>
    </form>
    <button className='deleteButton' onClick={openModal}>Delete</button> 
    </>
  )
}
