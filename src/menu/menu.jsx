import React from "react";
import logo from "../assets/logo2Dpl.png"
import { Link } from "react-router-dom";

const Menu=()=>{

    return(

        <header className="App-header">
      <section class="header-icons-container">
            
            </section>
            
            <nav>
                <section class="nav-logo-container">
                    <Link to={'/'} ><img src={logo} alt="Logo" /> </Link>
                </section>
                <section class="profile-link">
                    <Link to='/categoria'>Gestionar Categorias</Link>
                    <Link to='/producto'>Gestionar Producto</Link>
                </section>
            </nav>
      </header>
        
    )
    
}

export default Menu;