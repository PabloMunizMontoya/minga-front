import { useDispatch } from 'react-redux'
import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import alertActions from '../../store/alert/actions'
const {mingaAlertFalse} = alertActions


export default function Alerts() {
/*     const store = useSelector(store =>  console.log(store)) */
    const dispatch = useDispatch()
    let view = useSelector(store => store.alertReducer.view)
    let messages = useSelector(store => store.alertReducer.messages)
    let success = useSelector(store => store.alertReducer.success)
    console.log(view)
    console.log(messages)
    console.log(success)
    if(view){
      Swal.fire(
        `${success ? "Good job" : "Error"}`,
        `${success ? (typeof messages === "string") ? messages :  messages.map(message => message.message).join() : messages}`,
        `${success ? "success" : "error"}`
      )



    }

  return (

    <div>
    </div>

  )
}