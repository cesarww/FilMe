import React from "react";
import './Landing/css/styles.css'
import { Link, useNavigate } from "react-router-dom";
import logo from './Landing/assets/img/navbar-logo.png';
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function NavBarApp() {
    const estiloLogo = {
        width: '200px',
        height: 'auto',
    };

    const estiloNav = {
        height:'100px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    };
    const handleSignOut = async () => {
        try {
          await signOut(auth); // Sign out the user
          console.log("User signed out");
          // Optionally, you can redirect the user to the login page or perform any other action after sign-out
        } catch (error) {
          console.error("Error signing out:", error.message);
        }
    };

    const navigate = useNavigate();

    return ( 
        <nav style={estiloNav} className="navbar navbar-expand-lg fixed-top " id="mainNav">
            <div className="container">
                <Link className="navbar-brand mb-3" to="/"><img style={estiloLogo} src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/Myprofile">Mi Perfil</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard">Busqueda</Link></li>
                        <li className="nav-item"><Link className="nav-link"  onClick={handleSignOut}>LogOut</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default NavBarApp;