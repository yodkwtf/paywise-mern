import { useEffect } from 'react';
import MovieDetails from '../components/MovieDetails';
import MovieForm from '../components/MovieForm';
import useMoviesContext from '../hooks/useMoviesContext';
import useAuthContext from '../hooks/useAuthContext';

const Home = () => {
  const { movies, fetchMovies } = useMoviesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
