import React, { useState, useEffect } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import axios from 'axios';
import CardPeli from "./CardPeli";
import "./styles/Dashboard.css";
import { auth } from "../firebase/firebaseConfig"; // Import the 'auth' object from Firebase

function Dashboard(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false); // State to track user login status

    useEffect(() => {
        // Check if user is logged in
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is logged in
                setUserLoggedIn(true);
            } else {
                // User is not logged in
                setUserLoggedIn(false);
            }
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe from the auth state listener
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (searchTerm) {
                    response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            language: 'en-US',
                            query: searchTerm,
                            page: '1',
                            include_adult: false
                        },
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjNiMWFlNTgyNWU4YTA2ZmJlYTI4ZDMwMWI5ZGFlNyIsInN1YiI6IjY1Yjk3NzViMzM0NGM2MDE4NTkyNWIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6S8fMWeF356Xzi5I45KW-5axE4sOCItFlKFUPGGAuqo' // Replace YOUR_API_KEY with your actual API key
                        }
                    });
                } else {
                    response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                        params: {
                            language: 'en-US',
                            page: '1'
                        },
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjNiMWFlNTgyNWU4YTA2ZmJlYTI4ZDMwMWI5ZGFlNyIsInN1YiI6IjY1Yjk3NzViMzM0NGM2MDE4NTkyNWIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6S8fMWeF356Xzi5I45KW-5axE4sOCItFlKFUPGGAuqo' // Replace YOUR_API_KEY with your actual API key
                        }
                    });
                }
                setSearchResults(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Render the Dashboard only if the user is logged in
    return userLoggedIn ? (
        <Box className="dashboard-container" padding={10} w={'100%'}>
             <Input className="search-input" boxShadow={'md'} w={'100%'} type="text" placeholder="Busca tu peli favorita ..." onChange={handleInputChange} value={searchTerm}/>
             <Flex className="movies-container" justifyContent={'space-evenly'} alignItems={'center'} flexWrap={'wrap'}>
                 {searchResults.map((movie, index) => (
                     <CardPeli
                         key={index}
                         title={movie.title}
                         imageUrl= {movie.poster_path}
                         synopsis={movie.overview}
                         vote_average={movie.vote_average}
                         vote_count={movie.vote_count}
                         id={movie.id}
                     />
                 ))}
             </Flex>
        </Box> 
    ) : null; // Render null if user is not logged in
}

export default Dashboard;
