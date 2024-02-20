import logo from './logo.svg';
import './App.css';
import { Route, Routes,BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Layout from "./components/Header/Layout.jsx";
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';




function App() {
  const handleRegisterSuccess = () => {
    // Redirect to dashboard or any other page after successful registration
    console.log("Registration successful");
  };
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register onRegisterSuccess={handleRegisterSuccess} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
