import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    setRetrying(true);

    const retryInterval = setInterval(async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films/');
        if (!response.ok) {
          throw new Error('Something went wrong....Retrying');
        }
        const data = await response.json();

        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        clearInterval(retryInterval);
        setIsLoading(false);
        setRetrying(false);
      } catch (error) {
        setError(`${error.message}....Retrying`);
      }
    }, 5000);

    return () => {
      clearInterval(retryInterval);
      setIsLoading(false);
      setRetrying(false);
    };
  }

  function cancelRetryHandler() {
    setIsLoading(false);
    setRetrying(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {retrying && <button onClick={cancelRetryHandler}>Cancel Retry</button>}
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;