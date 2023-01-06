import React from "react";
import './header.css'



export default function Header() {


  return (
    <div >
      <header>


        

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