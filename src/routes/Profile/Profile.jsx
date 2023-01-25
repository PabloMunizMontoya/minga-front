import React from 'react'
import Navbar from '../../layouts/navbar/NavBar'
import './profile.css'
import Form from '../../components/updateForm/Form'
import { useSelector } from 'react-redux'
import Alerts from '../../components/alerts/Alerts'

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

        {is_author || is_company ?         
        <div className='contentForm'>
              <div className='editContent'>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profileImg"  className='profileImage'/>
              </div>
            <Form data={data} name={name}/>
            <Alerts/>
        </div>
        :
          <div>
                    <h2 className='noEdit'>You need to be an author or a company to edit your data</h2>
          </div>
        }
    </div>
  )
}
