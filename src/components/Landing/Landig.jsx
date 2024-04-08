import Footer from "./Footer";
import Mashead from "./Mashead";
import Navbar from "./Navbar";
import Servicios from "./Servicios";
import Team from "./Team";

function Landing() {
    return ( 
        <body id="page-top">
            <Navbar/>
            <Mashead/>
            <Servicios/>
            <Team/>
            <Footer/>
        </body>
     );
}

export default Landing;