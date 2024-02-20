import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Text } from "@chakra-ui/react"; // Import Chakra UI components

function Header({ onOpen }) {
    return (
        <header>
            <Flex h={70} bg={'black'} justifyContent={'space-between'} alignItems={'center'}>
                <Text p={10} color={'white'} fontSize={'xx-large'} fontFamily={'Bungee Shade'}>FILLME</Text>
                <Button p={10} bg={'red'} color={'whitesmoke'} as={Link} to ="/login" onClick={onOpen}>LogIn</Button>
                <Button p={10} bg={'red'} color={'whitesmoke'} as={Link} to="/dashboard">Dashboard</Button>
                <Button p={10} bg={'red'} color={'whitesmoke'} as={Link} to="/">Home</Button>
            </Flex>
        </header>
    );
}

export default Header;
