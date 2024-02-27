import React from "react";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // Assuming you have auth imported from firebaseConfig.js

function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User signed out");
      // Optionally, you can redirect the user to the login page or perform any other action after sign-out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <Button colorScheme="red" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}

export default SignOutButton;
