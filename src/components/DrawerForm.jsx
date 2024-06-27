import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    useDisclosure,
    Button,
    Input,
    Text,
    Select,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { collection, addDoc, Timestamp, getDocs, updateDoc, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebaseConfig';

  

function DrawerForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        onAuthStateChanged(auth,(user) => {
            if (user) {
              setUsuario(user);
              fetchPlaylists(user.uid);
              console.log(usuario);
            } else {
                navigate('/')
            }
        });
    
        
      }, []);
    const fetchPlaylists = async (userId) => {
    try {
        const playlistsRef = collection(db, `users/${userId}/playlists`);
        const querySnapshot = await getDocs(playlistsRef);
        const playlistsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
        setPlaylists(playlistsData);
    } catch (error) {
        console.error("Error fetching playlists:", error);
    }
    };

    const updatePlaylist = async (userId, playlistId, movieId, movieTitle) => {
        const playlistRef = doc(db, `users/${userId}/playlists/${playlistId}`);
    
        try {
            // Obtén el documento de la lista de reproducción directamente
            const playlistDoc = await getDoc(playlistRef);
            if (playlistDoc.exists()) {
                const playlistData = playlistDoc.data();
                const currentMovies = playlistData.peliculas || [];
    
                // Verifica si la película ya está en la lista
                const existingMovie = currentMovies.find(movie => movie.id === movieId);
                if (!existingMovie) {
                    // Agrega la nueva película al arreglo de películas
                    const updatedMovies = [...currentMovies, { id: movieId, title: movieTitle }];
    
                    // Actualiza la lista de reproducción con el nuevo arreglo de películas
                    await updateDoc(playlistRef, { peliculas: updatedMovies });

                    // Cierra el Drawer
                    onClose();
                    // Muestra un mensaje de éxito
                    alert('La película se ha agregado correctamente a la lista de reproducción.');

                } else {
                    console.log("La película ya está en la lista de reproducción.");
                    onClose()
                    alert('La película ya está en la lista de reproducción.');
                }
            } else {
                console.log("La lista de reproducción no existe.");
                onClose();
                alert('La lista de reproducción no existe.');

            }
        } catch (error) {
            console.error("Error actualizando la lista de reproducción:", error);
        }
    }
    
    
    return ( 
        <Box>
            <Button color={'white'}  ref={btnRef} bg={'green'} onClick={onOpen}>
                +
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Agregar Pelicula:</DrawerHeader>
                    <Text ml={4}>{props.title}</Text>

                    <DrawerBody>
                    <Select onChange={(e) => setPlaylistName(e.target.value)} placeholder='Select option'>
                        {playlists.map((playlist) => (
                            <option value={playlist.id}>{playlist.playlistName}</option>

                        ))}
                    </Select>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={() => updatePlaylist(usuario.uid, playlistName, props.peliculaid, props.title)} colorScheme='blue'>Agregar pelicula</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>  
    );
}

export default DrawerForm;