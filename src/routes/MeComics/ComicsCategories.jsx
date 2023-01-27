import axios from "axios";
import React, {useEffect, useState} from "react";
import CategoryButton from './CategoryButton'
import "./comicscategories.css"




 const ComicsCategories = () => {
    const [categories, setCategories] = useState([])

    const getData = async()=>{
        try {
            const response = await axios.get("http://localhost:8000/api/categories")
            setCategories(response.data.response)
            
        } catch(err){
            console.log(err)
        }
    }

    useEffect( () => {
        getData()
        
    },[])



  return (
    <div className="all-buttons">
        {categories.map((category, index) =>{
            return (
            <CategoryButton 
            index={index} 
            key={index} 
            id={category._id} 
            name={category.name}
            />
        )
    })}
    </div>
  )
}

export default ComicsCategories

