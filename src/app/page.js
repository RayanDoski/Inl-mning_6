'use client';
import { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import styles from './page.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState(0);
  const [sortOption, setSortOption] = useState("a");
  
  const addMovie = (e) => {
    e.preventDefault();
    if (!movie || !rating) {
      alert("Fyll i både titel och betyg!");
      return;
    }
    setMovies([...movies, { title: movie, rating }]);
    setMovie("");
    setRating(0);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Min filmlista</h1>
      
      <div className={styles.addMovie}>
        <h2>Lägg till en film</h2>
        <MovieForm
          movie={movie}
          rating={rating}
          onMovieChange={(e) => setMovie(e.target.value)}
          onRatingChange={(e) => setRating(Number(e.target.value))}
          onSubmit={addMovie}
        />
      </div>
      
      <div className={styles.movieList}>
        <MovieList
          movies={movies}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onDelete={deleteMovie}
        />
      </div>
    </div>
  );
}