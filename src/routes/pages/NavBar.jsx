import React, {useState} from "react";
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <p></p>
                <p></p>
                <p></p>
            </div>
            <img className="imgNav" src="/assets/logo1.png" alt="" />
            <div className={`nav_items ${isOpen && "open"}`}>
            <a className="anchor" href="#">Home</a>
            <a className="anchor" href="#">My comics</a>
            <a className="anchor" href="#">Logout</a>      
            </div>
            
        </div>
    )
}
export default Navbar