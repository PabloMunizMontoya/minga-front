import React, { useEffect} from 'react'
import { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import filterCategoryComicsActions from '../../store/comicCategories/actions'
const {filterCategoryComics} = filterCategoryComicsActions

export default function CategoryButton(props) {
    const { id,index, name} = props
    let category = useSelector((store) => store.comics.category)
    
    if (category.length > 0){
        category = category?.split(",")
        category = category?.includes(id)
        console.log(category)
    } else {
        category = false
    }
    
    const [click, setClick] = useState(category)
    const [color, setColor] = useState(category)
    const dispatch = useDispatch()


    const getId = (e) => { 
        setClick(!click)
        setColor(!color) 
        dispatch(filterCategoryComics(id))
    }
    return (
    <button 
    onClick={getId} 
    id={id} 
    className ={'button'+ (index+1) + (color ? ` active${index + 1}` : "")}
    >
    {name}
    </button>
    )
} 