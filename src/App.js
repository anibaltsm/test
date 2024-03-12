import React, { useState } from 'react';
import './App.css';

const moviesArray = [
  { title: 'The Shawshank Redemption', year: 1994, genre: 'Drama' },
  { title: 'The Godfather', year: 1972, genre: 'Crime' },
  { title: 'The Dark Knight', year: 2008, genre: 'Action' },
  { title: 'Pulp Fiction', year: 1994, genre: 'Crime' },
  { title: 'Schindler\'s List', year: 1993, genre: 'Biography' }
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * moviesArray.length);
    setSelectedMovie(moviesArray[randomIndex]);
  };

  const openIMDbPage = (title) => {
    window.open(`https://www.imdb.com/find?q=${encodeURIComponent(title)}&s=tt&ttype=ft&ref_=fn_ft`, '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Gallery App</h1>
      </header>
      <main>
        <div className="movies-container">
          {moviesArray.map((movie, index) => (
            <div key={index} className={`movie-card${selectedMovie && selectedMovie.title === movie.title ? ' selected' : ''}`}>
              <h2>{movie.title}</h2>
              <p><strong>Year:</strong> <span>{movie.year}</span></p>
              <p><strong>Genre:</strong> <span>{movie.genre}</span></p>
              <button onClick={() => openIMDbPage(movie.title)}>IMDb</button>
            </div>
          ))}
        </div>
        <button className="random-button" onClick={getRandomMovie}>Get Random Movie</button>
      </main>
    </div>
  );
}

export default App;
