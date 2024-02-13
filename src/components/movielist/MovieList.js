import React from "react";
import MovieCard from "../moviecard/MovieCard";
import './style.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movie">
            {movies.map((movie) => <MovieCard movie={movie} />)}
        </div>
    )
}

export default MovieList
