import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState from Firebase
import { auth } from "../../firebase/firebaseConfig";

function Header({ onOpen }) {
    const [user] = useAuthState(auth); // Get the authentication state

    const handleSignOut = async () => {
        try {
            await auth.signOut(); // Sign out the user
            console.log("User signed out");
            // Optionally, you can redirect the user to the login page or perform any other action after sign-out
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <header>
            <Flex h={70} bg={'black'} justifyContent={'space-between'} alignItems={'center'}>
                <Text p={10} color={'white'} fontSize={'xx-large'} fontFamily={'Bungee Shade'}>FILLME</Text>
                {user ? ( // Check if user is logged in
                    <>
                        <Button p={10} bg={'red'} color={'whitesmoke'} as={Link} to="/dashboard">Dashboard</Button>
                        <Button p={11} bg={'red'} color={'whitesmoke'} as={Link} to="/Myprofile">My profile</Button>
                        <Button p={10} bg={'red'} color={'whitesmoke'} onClick={handleSignOut}>Sign Out</Button>
                    </>
                ) : (
                    <Button p={10} bg={'red'} color={'whitesmoke'} as={Link} to="/login" onClick={onOpen}>LogIn</Button>
                )}
                <Button p={10} bg={'red'} color={'whitesmoke'} as={Link} to="/">Home</Button>
            </Flex>
        </header>
    );
}

export default Header;
