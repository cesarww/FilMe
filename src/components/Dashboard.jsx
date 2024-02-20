import React, { useState, useEffect } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import axios from 'axios';
import CardPeli from "./CardPeli";
import "./styles/Dashboard.css";

function Dashboard(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY5ZTgxZmIyOTU4YzFmOTM1ZTU4YzczNjIyN2ViNSIsInN1YiI6IjY1Y2FjMjExZTE5NGIwMDE4NDRkYWNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3jwoJOmHb_p4Cpbm8mhZ7U2N_BsNYv36SK7AIw9vGs'
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
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY5ZTgxZmIyOTU4YzFmOTM1ZTU4YzczNjIyN2ViNSIsInN1YiI6IjY1Y2FjMjExZTE5NGIwMDE4NDRkYWNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3jwoJOmHb_p4Cpbm8mhZ7U2N_BsNYv36SK7AIw9vGs'
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

    return ( 
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
     );
}

export default Dashboard;
