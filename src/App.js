import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/movielist/MovieList';
import moviesData from './components/datacart/DataCart';
import AddMovie from './components/add/AddMovie';

function App() {
  // useState for filter and rating
  const [movies, setMovies] = useState(moviesData);
  const [searchData, setsearchData] = useState("");
  const [ratingData, setratingData] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const handleSearch = (e) => {
    setsearchData(e.target.value);
  }
  const handleFilterByRating = (targetRating) => {
    setratingData(targetRating);
  }
  useEffect(() => {
    if (ratingData !== "") {
      const filtered = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(searchData.toLowerCase()) &&
        movie.rate >= ratingData
      );
      setFilteredMovies(filtered);
    } else {
      const filtered = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [ratingData, searchData])

  // useState for add
  const AddM = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  console.log((movies));
  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <AddMovie AddM={AddM} />
      <button onClick={() => handleFilterByRating(5)}>Filter by Rating 5+</button>
      <button onClick={() => handleFilterByRating(4)}>Filter by Rating 4+</button>
      <button onClick={() => handleFilterByRating(3)}>Filter by Rating 3+</button>
      <button onClick={() => handleFilterByRating(2)}>Filter by Rating 2+</button>
      <button onClick={() => handleFilterByRating(1)}>Filter by Rating 1+</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
