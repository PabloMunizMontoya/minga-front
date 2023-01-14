import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const FilterCategory = async()=>{

     const [categories, setCategories] = useState([])

     const data = async ()=> {
        try{
            const response = await axios.get('htttp://localhost:8000/api/categories')
           setCategories(response.data.response)
        }catch(error){
        console.log(error);
   
        }
     }
    
    // useEffect(()=>{
    //     FilterCategory()
    // },[])
    
     const traerId = (element) =>{
         console.log(element)
     }


    return(
        <div className='conteiner-buttons'>
            {
                categories.map((category, index) => {
                    return <button onClick={traerId} key={index} id={category._id}>{category.name}</button>
                })
            }

        </div>
    )

}


export default FilterCategory