'use client';

import styles from '../page.module.css';

export default function MovieList({movies, sortOption, onSortChange, onDelete}) {
  const sortedMovies = [...movies].sort((a, b) => {
    return sortOption === "a" 
      ? a.title.localeCompare(b.title) 
      : b.rating - a.rating;
  });

  return (
    <div className={styles.movieList}>
      <h2>Inlagda filmer</h2>
      
      <table className={styles.movieTable}>
        <tbody>
          {sortedMovies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td className={styles.stars}>{'★'.repeat(movie.rating)}</td>
              <td className={styles.deleteButton} onClick={() => onDelete(index)}>Delete</td>
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
          onChange={() => onSortChange("a")} 
        />
        <label htmlFor="sort-alpha">Alfabetisk ordning</label>
        
        <input 
          type="radio" 
          id="sort-rating" 
          name="sort" 
          checked={sortOption === "r"} 
          onChange={() => onSortChange("r")} 
        />
        <label htmlFor="sort-rating">Betygsordning</label>
      </div>
    </div>
  );
}