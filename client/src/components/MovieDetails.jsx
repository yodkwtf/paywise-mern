import useMoviesContext from '../hooks/useMoviesContext';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MovieDetails = ({ movie }) => {
  const { deleteMovie, handleEdit } = useMoviesContext();

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
          {movie.runtime} mins
        </p>
      )}
      {movie.plotSummary && (
        <p>
          <strong>Summary: </strong>
          {movie.plotSummary}
        </p>
      )}

      <button id="edit-movie" onClick={() => handleEdit(movie)}>
        <FaEdit />
      </button>
      <button id="delete-movie" onClick={() => deleteMovie(movie._id)}>
        <FaTrash />
      </button>
    </div>
  );
};
export default MovieDetails;
