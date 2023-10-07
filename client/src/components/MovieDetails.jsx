import useMoviesContext from '../hooks/useMoviesContext';
import { FaTrash } from 'react-icons/fa';

const MovieDetails = ({ movie }) => {
  const { deleteMovie } = useMoviesContext();

  return (
    <div className="movie-details">
      <h4>{movie.name}</h4>
      <p>
        <strong>Rating: </strong>
        {movie.rating}
      </p>
      <p>
        <strong>Genre: </strong>
        {movie.genre}
      </p>
      {movie.releaseYear && (
        <p>
          <strong>Release Year: </strong>
          {movie.releaseYear}
        </p>
      )}
      {movie.runtime && (
        <p>
          <strong>Runtime: </strong>
          {movie.runtime}
        </p>
      )}
      {movie.plotSummary && <p>{movie.plotSummary}</p>}

      <button onClick={() => deleteMovie(movie._id)}>
        <FaTrash />
      </button>
    </div>
  );
};
export default MovieDetails;
