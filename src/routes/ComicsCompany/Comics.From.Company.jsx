import React from 'react'
import './comics.from.company.css'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import comicActions from '../../store/ComicsFromCompany/actions'
import {useParams} from 'react-router-dom'
import FilterCategory from './FIlterCategory'
const { obtenerComics } = comicActions


const ComicsFromCompany = () => {

   // const store = useSelector(store => store)

   const comics = useSelector(store => store.comicReducer.comics)

   const {id} = useParams()
   console.log(id);



    console.log(comics);
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerComics({company:id, category: "63bd7cf64e1d3953944ea947"}))
    },[])

    
    return (


        

        
      <div className='wrap'>



        {/* <FilterCategory/> */}
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
            
      </div>


    )
         
}
  

export default ComicsFromCompany