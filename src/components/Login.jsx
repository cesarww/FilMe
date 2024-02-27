import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword method from Firebase Auth
import { auth } from "../firebase/firebaseConfig"; // Import the 'auth' object from Firebase

function LoginPage() {
  const [email, setEmail] = useState(""); // Change 'username' to 'email'
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate to navigate programmatically

  const handleLogin = async () => { // Make handleLogin asynchronous
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword to authenticate user
      navigate("/"); // Navigate to home page after successful login
      console.log("Login successful");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box
      maxW="400px"
      m="auto"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Login
      </Text>
      <Input
        placeholder="Email" // Change 'Username' to 'Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="2"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb="2"
      />
      {error && <Text color="red.500" mb="2">{error}</Text>}
      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
      <Button as={Link} to="/register" colorScheme="green" ml="2">Register</Button> {/* Register button */}
    </Box>
  );
}

export default LoginPage;
