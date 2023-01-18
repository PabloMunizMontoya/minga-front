import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import traerComicsdeCategoryActions from '../../store/ComicsFromCategories/actions'
import comicsFromCategoryReducer from '../../store/ComicsFromCategories/reducers'





const FilterCategory = ({cat, index})=>{


    let category = useSelector((store) => store.comicsFromCategoryReducer.categoriesFromAuthor)

    const dispatch = useDispatch()
    const {traerComicsdeCategory} = traerComicsdeCategoryActions
    const [click, setClick] = useState(true)
    const [color, setColor] = useState(category)
//capt
//definir la accion que va a despachar el id hacia el reductor para que el id de la categoria este disponible para el componente que hace la peticion (es una accion sincrona= createAction)
//definido el estado de redux con el id de la categoria: con useSelector lo utilizo para la peticion en comics.from.company

     //console.log(categories)
    
     const traerId = (element) =>{
    // console.log(element.target.id)
     setClick(!click)
     setColor(!color) 
     let data = {
        category: element.target.id,
        click: click
     }
     dispatch(traerComicsdeCategory(data))
     }

    return(
        <button 
        onClick={traerId} id={cat._id} className ={'button'+ 1 + (color ? ` active${1}` : "")} >
        {cat.name}
        </button> 
    )

}


export default FilterCategory 