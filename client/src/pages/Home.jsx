import { useEffect } from 'react';
import MovieDetails from '../components/MovieDetails';
import MovieForm from '../components/MovieForm';
import useMoviesContext from '../hooks/useMoviesContext';

const Home = () => {
  const { movies, fetchMovies } = useMoviesContext();

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      {movies && movies.length > 0 ? (
        <div className="movies">
          {movies?.map((movie) => (
            <MovieDetails key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies added...</p>
      )}
      <MovieForm />
    </div>
  );
};

export default Home;
