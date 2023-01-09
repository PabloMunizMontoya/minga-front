import React from "react";
import './header.css'



export default function Header() {


  return (
    <div >
      <header> 

        <div className="section">
          <span className="spanHeader">           
              We announce our next round of funding. <a>Reed More →</a>
          </span>
          <div className="headerContain">
          <h1>Your favorite comic shop</h1>
          <p className="pHeader">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <a className="button-started" href="#main">
            Start →{" "}
          </a>
          </div>
         
        </div>
      </header>
    </div>
  );
}