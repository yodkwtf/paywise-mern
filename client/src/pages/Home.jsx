import { useEffect } from 'react';
import MovieDetails from '../components/MovieDetails';
import MovieForm from '../components/MovieForm';
import useMoviesContext from '../hooks/useMoviesContext';
import useAuthContext from '../hooks/useAuthContext';
import Loader from '../components/Loader';

const Home = () => {
  const { movies, fetchMovies, isLoading } = useMoviesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main className="home">
      <div className="content-block">
        {movies && movies.length > 0 ? (
          <div className="movies">
            {movies?.map((movie) => (
              <MovieDetails key={movie._id} movie={movie} />
            ))}
          </div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <p>No movies added...</p>
        )}
      </div>

      <div className="form-block">
        <MovieForm />
      </div>
    </main>
  );
};

export default Home;
