import React from 'react'
import './comics.from.company.css'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import comicActions from '../../store/ComicsFromCompany/actions'
import traerComicsdeCategoryActions from '../../store/ComicsFromCategories/actions'
import FilterCategory from './FIlterCategory'
import {useParams} from 'react-router-dom'
const { obtenerComics } = comicActions


const ComicsFromCompany = () => {
  //  useSelector(store => console.log(store))
    const dispatch = useDispatch()
   // const {traerComicsdeCategory} = traerComicsdeCategoryActions
   const [pages, setPages] = useState(1)
  
   const comics = useSelector(store => store.comicReducer.comics)
   const category = useSelector (store => store.comicsFromCategoryReducer.categoriesFromAuthor)
   const {id} = useParams()
   //console.log(id);
   //console.log(category);
   const [categories, setCategories] = useState([])
     const data = async ()=> {
        try{
            const response = await axios.get('http://localhost:8000/api/categories')
           setCategories(response.data.response)
          // console.log(response)
        }catch(error){
        console.log(error);
        }
     }
     useEffect(()=>{
      data()
     },[])

    useEffect(() => {
        dispatch(obtenerComics({company:id, category: category, pages}))
        // en lugar de pasar el harcodeado pasar variable category 
    },[pages]) // adentro del corchete agregar el parametro que cada vez que cambie ejecuta el efecto(parametro : category)

    const lengthOfComics = comics
    console.log( lengthOfComics)
    console.log(pages)
     const next = () => {
        setPages(pages + 1)
    
    } 
    const prev = () => {
        setPages(pages-1)
    }
    
    return (
      <div className='wrap'>
          <>
          <div className='conteiner-buttons'>
            {categories.map((cat,index)=><FilterCategory cat={cat} key={index}/>)}
        </div>
            {
                comics?.map((card,index)=>  {return <div key={index} className='conteiner-1'>
                       <div className='border-conteiner-1'>
                             <div className='left-conteiner'>
                                <h2>{card.title}</h2>
                                <h3>Type</h3>
                            </div>
                     <div>
                       <input className='buttons-edit' type="button" value="Edit" />
                        <input className='buttons-delete' type="button" value="Delete"/>
                     </div>
                    </div>
                        <div className='rigth-conteiner'>
                        <img className='img-card' src={card.photo} />    
                    </div>
                    </div>
                })
            }      
            </>
            <div className='conteinerButtonsPagination'>
                    {pages === 1 ? null :
                        <button className='buttonPagination' onClick={prev}>prev</button>
                    }
                </div>
                <div>
                    {lengthOfComics?.length < 1 ? null : (
                       <button className='buttonPagination' onClick={next}>next</button> 
                    )}

                </div>
      </div>
    )     
}
  

export default ComicsFromCompany