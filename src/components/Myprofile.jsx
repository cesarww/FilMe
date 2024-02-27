import React, { useState, useEffect } from "react";
import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";
import { auth, db } from "../firebase/firebaseConfig"; // Update the import statement
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";

function Myprofile() {
  const [user, setUser] = useState(null);
  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchPlaylists(user.uid); // Fetch playlists when user changes
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
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
      const playlistsRef = collection(db, `users/${user.uid}/playlists`);

      // Add a new playlist document to the collection
      await addDoc(playlistsRef, {
        playlistName: playlistName.trim(),
        createdAt: Timestamp.now(),
      });

      // Reset the playlist name input field
      setPlaylistName("");
      fetchPlaylists(user.uid); // Fetch updated playlists after adding
    } catch (error) {
      console.error("Error creating playlist:", error);
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
        Profile
      </Text>
      {user && (
        <Box>
          <Text>Email: {user.email}</Text>
          <Input
            placeholder="Enter playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            mt="4"
            mb="2"
          />
          <Button colorScheme="blue" onClick={handleCreatePlaylist}>
            Create Playlist
          </Button>
          <VStack mt="4" align="start">
            {playlists.map((playlist) => (
              <Text key={playlist.id}>{playlist.playlistName}</Text>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}

export default Myprofile;
