import React, { useState, useEffect } from "react";
import { Box, Text, Input, Button, VStack, Flex } from "@chakra-ui/react";
import { auth, db } from "../../firebase/firebaseConfig"; // Update the import statement
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import NavBarApp from "../NavbarApp";
import HeaderProfile from "./HeaderProfile";
import './css/styles2.css';
import Playlist from "./Playlist";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Myprofile() {
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

  // Function to fetch playlists from Firestore
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
  const handleCreatePlaylist = async () => {
    if (!playlistName.trim()) {
      // Playlist name cannot be empty
      return;
    }

    try {
      // Get a reference to the playlists collection for the current user
      const playlistsRef = collection(db, `users/${usuario.uid}/playlists`);

      // Add a new playlist document to the collection
      await addDoc(playlistsRef, {
        playlistName: playlistName.trim(),
        createdAt: Timestamp.now(),
      });

      // Reset the playlist name input field
      setPlaylistName("");
      fetchPlaylists(usuario.uid); // Fetch updated playlists after adding
    } catch (error) {
      console.error("Error creating playlist:", error);
    }
  };

 

  return (
    <Box>
      <NavBarApp/>
      
        <HeaderProfile user = {usuario.email}/>
        <Box bg={'black'}>
          <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Playlist</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <Flex mb={30} justifyContent={'center'} alignItems={'center'} gap={4}>
                  <Input
                    placeholder="Enter playlist name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    
                    color={'white'}
                    w={'70%'}
                  />
                  <Button colorScheme="blue" onClick={handleCreatePlaylist}>
                    Create Playlist
                  </Button>

                </Flex>
                <div class="row justify-content-center">
                  {playlists.map((playlist) => (
                    <Playlist id = {playlist.id} name= {playlist.playlistName}/>
                  ))}
                </div>
            </div>
          </section>

          
          
          
        </Box>
      
    </Box>
  );
}

export default Myprofile;
