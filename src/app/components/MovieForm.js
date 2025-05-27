'use client';

import styles from '../page.module.css';

export default function MovieForm({movie, rating, onMovieChange, onRatingChange, onSubmit}) {
  return (
    <form className={styles.movieForm} onSubmit={onSubmit}>
      <label htmlFor="title">Titel:</label>
      <input 
        type="text" 
        id="title" 
        placeholder="Titel här..." 
        value={movie} 
        onChange={onMovieChange}
        className={styles.formInput}
      />
      
      <label htmlFor="rating">Betyg:</label>
      <select 
        id="rating" 
        value={rating} 
        onChange={onRatingChange}
        className={styles.formSelect}
      >
        <option value="" defaultValue>Välj betyg här...</option>
        <option value="1">★</option>
        <option value="2">★★</option>
        <option value="3">★★★</option>
        <option value="4">★★★★</option>
        <option value="5">★★★★★</option>
      </select>
      
      <button className={styles.addButton} type="submit">Lägg till film</button>
    </form>
  );
}