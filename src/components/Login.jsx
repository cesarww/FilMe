import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from React Router

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Here you can implement your login logic
    if (username === "admin" && password === "password") {
      // Successful login
      console.log("Login successful");
    } else {
      // Failed login
      setError("Invalid username or password");
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
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
