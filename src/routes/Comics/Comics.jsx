import React from 'react';
import Navcomics from "../../components/navcomics/Navcomics"
import Maincomics from "./maincomics/Maincomics"
import "./comics.css"

function Comics() {
    return (
        <>
        <div className='nav-container' >
            <Navcomics/>
        </div>    
            <Maincomics />
        
        </>
    )
}

export default Comics 