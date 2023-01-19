import indexRouter from "./routes/index.js";
import { RouterProvider } from "react-router-dom";

import './App.css'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import authActions from "./store/auth/actions"
const { iniciar_sesion_con_token } = authActions

function App()  {

  //useSelector(store => console.log(store))
  let dispatch = useDispatch()

  useEffect(() => {
      let token = localStorage.getItem('token')
      //console.log(token)
      if (token) {
          dispatch(iniciar_sesion_con_token(token))
      }
  },[])

  return (
      <RouterProvider router={ indexRouter } />
  )
}

export default App