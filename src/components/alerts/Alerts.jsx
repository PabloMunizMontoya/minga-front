import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Alerts() {
/*     const store = useSelector(store =>  console.log(store)) */
    let view = useSelector(store => store.alertReducer.view)
    let messages = useSelector(store => store.alertReducer.messages)
    console.log(view)
/*     const alerta = () => {
      toast('notificacion', {  
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    } */
    if(view){
      toast(typeof messages === "string"? messages : messages = messages?.map(message => message.message).join("<br>"),
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }

  return (

    <div>
{/*         {typeof messages === "string"? messages : messages = messages?.map(message => message.message).join("<br>")}
        {view && messages} */}
        <ToastContainer/>

    </div>

  )
}
