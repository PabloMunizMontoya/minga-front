
import axios from "axios"
import React, {useEffect, useState} from "react"
import "./comicscards.css"
import { useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom"

const ComicsCards = () => {
    
    const { comics } = useSelector((store) => store?.comics)
    console.log(comics)

    return (
        <>
             {comics?.map((card, index) => {
                
                return (
                 <Anchor to= {`/comic/${card._id}`} key={index} className="card">
                    <div className="rectangle">

                    </div>    
                
                        <div className="textCard">
                            <h2 className="tittleCard">{card.title}</h2>
                            <p className="categoryText">{card.category.name}</p>
                            
                        </div>

                        <div className="divCard">
                            <img className="imagen-card" src={card.photo} alt=""  />
                        </div>

                    
                </Anchor>
                )
             })} 
        </>
    )
}

export default ComicsCards