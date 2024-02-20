import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,Text } from "@chakra-ui/react";
import bg from '../img/homebg.webp';
import palomitas from '../img/palomitas.png';
import Productos from "./Producto";
import '@fontsource/bungee-shade';
import '@fontsource/bebas-neue';

function Home(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <Box w={'100%'}  backgroundImage={bg} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontWeight='bold' mb='1rem'>
                    You can scroll the content behind the modal
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            <Box   w={'100%'}  backgroundColor={'rgba(0, 0, 0, 0.8)'}>
                <Flex  backgroundImage={palomitas} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}  w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
                    <Box    p={200}>
                        <Text color={'whitesmoke'} fontWeight={'black'} fontFamily={'Bungee Shade'} fontSize={'xxx-large'}>¡BIENVENIDO A FILLME!</Text>
                        <br />
                        <Text color={'whitesmoke'} fontWeight={'black'} fontFamily={'Bebas Neue'} fontSize={'x-large'}>Somos un equipo apasionado de amantes del cine que creemos que las películas son más que simples entretenimientos: son experiencias compartidas que nos conectan, nos emocionan y nos inspiran. En Fillme, hemos creado una plataforma donde puedes crear y compartir tus playlists de películas favoritas con tus amigos y familiares de una manera fácil y divertida.</Text>
                        <Box p={10}> <Button bg={'red'} fontFamily={'Bebas Neue'} fontSize={'x-large'} color={'whitesmoke'} size={'lg'} onClick={onOpen}>¡¡ EMPIEZA YA !!</Button> </Box>

                    </Box>
                </Flex>
                <Box  w={'100%'} h={'100vh'} >
                    <Flex w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'space-evenly'}>
                        <Productos/>
                        <Productos/>
                        <Productos/>
                    </Flex>
                </Box>
            </Box>
           
        </Box>
     );
}

export default Home;