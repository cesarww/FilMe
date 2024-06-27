import React, { useEffect, useState } from "react";
import './css/styles2.css';
import img from './assets/img/portfolio/circus.png'
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function Playlist(props) {
    const [usuario, setUsuario] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        // Check if user is logged in
        onAuthStateChanged(auth,(user) => {
            if (user) {
            setUsuario(user);
            console.log(usuario);
            } else {
                navigate('/')
            }
        });

        
    }, []);

    const removeMovieFromPlaylist = async (userId, playlistId, movieId) => {
        const playlistRef = doc(db, `users/${userId}/playlists/${playlistId}`);
    
        try {
            // Obtén el documento de la lista de reproducción directamente
            const playlistDoc = await getDoc(playlistRef);
            if (playlistDoc.exists()) {
                const playlistData = playlistDoc.data();
                const currentMovies = playlistData.peliculas || [];
    
                // Verifica si la película ya está en la lista
                const existingMovieIndex = currentMovies.findIndex(movie => movie.id === movieId);
    
                if (existingMovieIndex !== -1) {
                    // Elimina la película del arreglo de películas
                    currentMovies.splice(existingMovieIndex, 1);
    
                    // Actualiza la lista de reproducción sin la película eliminada
                    await updateDoc(playlistRef, { peliculas: currentMovies });
                    
                    
                    // Muestra un mensaje de éxito
                    alert('La película se ha eliminado correctamente de la lista de reproducción.');
                    window.location.reload();

                } else {
                    console.log("La película no está en la lista de reproducción.");
                    alert('La película no está en la lista de reproducción.');
                }
            } else {
                console.log("La lista de reproducción no existe.");
                alert('La lista de reproducción no existe.');
            }
        } catch (error) {
            console.error("Error actualizando la lista de reproducción:", error);
        }
    }
    
    return ( 
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white text-uppercase">{props.name}</div>
                </div>
                <img class="img-fluid" src={img} alt="..." />
            </div>
            <div class="portfolio-modal modal fade" id={props.id} tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div class="modal-body text-center pb-5">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{props.name}</h2>
                                        <div class="divider-custom">
                                            <div class="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                            <div class="divider-custom-line"></div>
                                        </div>
                                        <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                                        
                                        <TableContainer>
                                            <Table variant='striped' colorScheme='teal'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Nombre</Th>
                                                        <Th>Accion</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                {props.peliculas.map((peli) => (
                                                    <Tr>
                                                        <Td>{peli.title}</Td>
                                                        <Td><Button onClick={()=>removeMovieFromPlaylist(usuario.uid,props.id,peli.id)} bg={'red'}>🗑️</Button></Td>
                                                    </Tr>
                                                ))}
                                                    
                                                
                                                </Tbody>
                                                
                                            </Table>
                                        </TableContainer>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}

export default Playlist;