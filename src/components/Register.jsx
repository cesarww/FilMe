import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase"; // Ensure this path is correct

function RegisterPage({ onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const auth = firebase.auth(); // Get the auth instance
      await auth.createUserWithEmailAndPassword(email, password);
      onRegisterSuccess(); // Call the callback function passed from the parent component
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
        Register
      </Text>
      <Input
        placeholder="Email"
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
      <Button colorScheme="blue" onClick={handleRegister}>
        Register
      </Button>
      <Button as={Link} to="/login" colorScheme="green" ml="2">
        Log In
      </Button>
    </Box>
  );
}

export default RegisterPage;
