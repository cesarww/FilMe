import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase/firebaseConfig"; 
import logo from './Landing/assets/img/navbar-logo.png'
import { Box, Button, Center, Flex, Input } from "@chakra-ui/react";
import bg from './Landing/assets/img/header-bg.webp'

function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user); 
      navigate("/dashboard"); // Navigate to the dashboard after successful login
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  return (
    <Flex w={'100%'} height={'100vh'} alignItems={'center'} justifyContent={'center'} backgroundImage={bg} backgroundPosition={'center'} backgroundSize={'cover'}>   
      <Box w={'35%'} bg={'rgba(0, 0, 0, 0.9)'} p={10}>
        <Flex justifyContent={'center'}><img width={'300'} src={logo} alt="" /></Flex>
        <form className="content__form" onSubmit={handleLogin}>
            <Input color={'whitesmoke'} required="" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input color={'whitesmoke'} mt={5} required="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <hr />
            <Button type="submit">LogIn</Button>
        </form>
      </Box>
    </Flex>
  );
}

export default LoginPage;
