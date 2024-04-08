import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/styles.css';
import logo from './assets/img/navbar-logo.png';

function Navbar() {
    const estiloLogo = {
        width: '200px',
        height: 'auto',
    };

    const estiloNav = {
        height:'100px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    };

    const navigate = useNavigate();

    return ( 
        <nav style={estiloNav} className="navbar navbar-expand-lg   fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand mb-3" to="/"><img style={estiloLogo} src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        {/* Utilizamos Link en lugar de 'a' y 'href' */}
                        <li className="nav-item"><Link className="nav-link" to="/login">LogIn</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;
