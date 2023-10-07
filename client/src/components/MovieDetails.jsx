const MovieDetails = ({ movie }) => {
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
      <p>
        <strong>Release Year: </strong>
        {movie.releaseYear}
      </p>
      <p>
        <strong>Runtime: </strong>
        {movie.runtime} mins
      </p>
    </div>
  );
};
export default MovieDetails;
