import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";
import { data } from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";
const Movies = () => {
  const [movies, setmovie] = useState(data);

  const AddMovie = () => {
    const movie = {
      id: nanoid,
      title: "Spiral Jigsaw",
      year: "2022",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setmovie([...movies, movie]);
  };

  return (
    <div>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <button onClick={AddMovie}>Add Movies</button>
      </section>
    </div>
  );
};

export default Movies;
