'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {

  const [movies, setMovies] = useState([]);

  // The movie and rating state
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState(0);

  // Funktion för att lägga till en film
  const addMovie = (e) => {
    e.preventDefault();

    if (!movie || !rating) {
      alert("Fyll i både titel och betyg!");
      return;
    }

    const newMovie = {
      title: movie,
      rating: rating
    };

    setMovies([...movies, newMovie]);
    setMovie("");
    setRating(0);
  };

  // för ordning av filmer
  const [sortOption, setSortOption] = useState("a");

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOption === "a") {
      return a.title.localeCompare(b.title);
    } else {
      return b.rating - a.rating;
    }
  });

  // Funktion för att ta bort en film
  const deleteMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Min filmlista</h1>
      
      <div className={styles.addMovie}>
          <h2>Lägg till en film</h2>
          
          <form className={styles.movieForm} onSubmit={addMovie}>
              <label htmlFor="title">Titel:</label>
              <input type="text" id="title" placeholder="Titel här..." value={movie} onChange={(e) => setMovie(e.target.value)} />
              
              <label htmlFor="rating">Betyg:</label>
              <select id="rating" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                  <option value="" defaultValue>Välj betyg här...</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                  <option value="4">★★★★</option>
                  <option value="5">★★★★★</option>
              </select>
              
              <button className={styles.addButton} type="submit">Lägg till film</button>
          </form>
      </div>
      
      <div className={styles.movieList}>
          <h2>Inlagda filmer</h2>
          
          <table className={styles.movieTable}>
              <tbody>
                  {sortedMovies.map((movie, index) => (
                    <tr key={index}>
                      <td>{movie.title}</td>
                      <td className={styles.stars}>
                        {'★'.repeat(movie.rating)}
                      </td>
                      <td className={styles.deleteButton} onClick={() => deleteMovie(index)}>Delete</td>
                    </tr>
                  ))}
              </tbody>
          </table>
          
          <div className={styles.sortOptions}>
            <input 
              type="radio" 
              id="sort-alpha" 
              name="sort" 
              checked={sortOption === "a"} 
              onChange={() => setSortOption("a")} 
            />
            <label htmlFor="sort-alpha">Alfabetisk ordning</label>
            
            <input 
              type="radio" 
              id="sort-rating" 
              name="sort" 
              checked={sortOption === "r"} 
              onChange={() => setSortOption("r")} 
            />
            <label htmlFor="sort-rating">Betygsordning</label>
          </div>
      </div>
    </div>
  );
}
