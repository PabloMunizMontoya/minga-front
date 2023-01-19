import React, {useState} from "react";
import "./navbar.css"
import  {Link as Anchor} from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className={`contenedor ${isOpen && "open"}`}>
        <div className={`navbar ${isOpen && "open"}`}>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <p></p>
                <p></p>
                <p></p>
            </div>
            <img className="imgNav" src="/assets/logo1.png" alt="" />
            <div className={`nav_items ${isOpen && "open"}`}>
            <h2 className={`otracosa ${isOpen && "open"}`}>pepito@petito.com</h2>
            <Anchor className="anchor" to={"/"}>Home</Anchor>
            <Anchor className="anchor" to={"/comics"}>Comics</Anchor>
            <Anchor className="anchor" to={"/my-comics"}>My comics</Anchor>
            <Anchor className="anchor" to={"/new-author"}>New Author</Anchor>
            <Anchor className="anchor" to={"/new-chapter"}>New Chapter</Anchor>
            <Anchor className="anchor" to={"/new-cia"}>New Cia.</Anchor>
            <Anchor className="anchor" to={"/"}>Logout</Anchor>      
            </div>

        </div>
        </div>
    )
}
export default Navbar