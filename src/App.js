import logo from './logo.svg';
import './App.css';
import { Route, Routes,BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import Myprofile from './components/Perfil/Myprofile.jsx';
import Landing from './components/Landing/Landig.jsx';



function App() {
  const handleRegisterSuccess = () => {
    // Redirect to dashboard or any other page after successful registration
    console.log("Registration successful");
  };
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register onRegisterSuccess={handleRegisterSuccess} />} />
          <Route path='/Myprofile' element={<Myprofile/>}/>
        </Routes>

    </div>
  );
}

export default App;
