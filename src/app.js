import React, { useEffect, useState } from "react";
import "./app.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
// 6261550e
const API_URL = "http://www.omdbapi.com/?apikey=6261550e";

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data.Search)
        setMovies(data.Search);
    };
    useEffect(() => {
        searchMovies(searchTitle);
    }, []);
    console.log(movies)
    return <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input type="text" name="search" id="search" placeholder="Superman" onChange={(e)=>{setSearchTitle(e.target.value);searchMovies(searchTitle)}} />
            <img src={SearchIcon} alt="SearchIcon" onClick={() => { searchMovies(searchTitle)}} />
        </div>
        {             movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => {
                        return <MovieCard movie={movie} />
                    })
                    }
                </div>
            ) : (
                <div className="empty">
                    <h2>no movie found</h2>
                </div>
            )
        }
    </div>
};

export default App;
