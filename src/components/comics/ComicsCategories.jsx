import axios from "axios";
import React, {useEffect, useState} from "react";
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
        {
        categories.map((category, index) =>{return <button key={index} className={"button"+ (index +1)}>{category.name}</button>})
        }
    </div>
  )
}

export default ComicsCategories

