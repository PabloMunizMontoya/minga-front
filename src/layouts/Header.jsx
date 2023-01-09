import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";
export default function Header() {
  const [variable, setVariable] = useState(false);
  const handleMenu = () =>{
    setVariable(!variable)
  }

  return (
    <div>
      <header>
        <button onClick={handleMenu} className="menuButton">Menu</button>
        {
          variable
          ?
          (
            <nav className="activo">
              <div className="navItems">
              <Anchor to={"/"}>Home</Anchor>
              <Anchor to={"/comics"}>Comics</Anchor>
              <Anchor to={"/form"}>Form</Anchor>
              <Anchor to={"/new-comic"}>New Comic</Anchor>
              </div>
          </nav>
          )
          :          
        <nav className="none">
          <a href="#">Home</a>
          <a href="#">Comics</a>
          <a href="#">Comic Details</a>
          <a href="#">New Comic</a>
        </nav>
        }

        <div className="section">
          <span>
            Anunciamos nuestra próxima ronda de financiación. <a>Leer más →</a>
          </span>
          <h1>Tu tienda de comics favorita</h1>
          <p>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <a className="button-started" href="#main">
            Empezar →{" "}
          </a>
        </div>
      </header>
    </div>
  );
}
