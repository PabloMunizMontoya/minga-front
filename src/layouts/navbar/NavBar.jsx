import React, {useState} from "react";
import "./navbar.css"
import  {Link as Anchor} from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import authActions from '../../store/auth/actions'
const { cerrar_sesion } = authActions

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    let { token,is_online } = useSelector(store => store.auth)
    let dispatch = useDispatch()

    async function signout(event) {
        await dispatch(cerrar_sesion(token))
    }

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
            <Anchor className="anchor" to={"/comics/me"}>My Comics</Anchor>
            <Anchor className="anchor" to={"/new-author"}>New Author</Anchor>
            <Anchor className="anchor" to={"/new-chapter"}>New Chapter</Anchor>
            <Anchor className="anchor" to={"/new-cia"}>New Company</Anchor>
            <Anchor className="anchor" to={"/edit-profile"}>Edit Profile</Anchor>
            {is_online ? (
                <span className="anchor" onClick={signout}>Sign Out</span>
            ) : ( <>
                <Anchor className="anchor" to={"/signup"}>Sign Up</Anchor>
                <Anchor className="anchor" to={"/signin"}>Sign In</Anchor>
            </>
            )}
            
            </div>

        </div>
        </div>
    )
}
export default Navbar