import React from 'react';
import Navcomics from "../../components/navcomics/Navcomics"
import Maincomics from "./maincomics/Maincomics"
import "./comics.css"
import NavBar from '../pages/NavBar'


function Comics() {
    return (
        <>
        <div className='nav-container' >
            <NavBar/>
        </div>    
            <Maincomics />
           
        </>
        

    )
}

export default Comics 