import React from 'react'
import Navbar from '../../layouts/navbar/NavBar'
import './profile.css'
import updateActions from '../../store/authorOrCompany/actions'
import alertActions from '../../store/alert/actions'
import Alerts from '../../components/alerts/Alerts'
import Form from '../../components/updateForm/Form'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {is_author, is_company} = useSelector((store) => store.auth)
  let data = []
  let name = ""
  if (is_author) {
    data = ["name","last_name","city","country","date","photo"]
    name = "authors"
  }
  if(is_company){
    data = ["name","logo","website","description"]
    name = "companies"
  }
  console.log(data);



  return (
    <div>
        <Navbar/>
        <div className='editContent'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profileImg"  className='profileImage'/>
        </div>
        <div className='contentForm'>
            <Form data={data} name={name}/>
            <Alerts/>
        </div>
    </div>
  )
}
