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
      <div className="movies">
        {movies &&
          movies?.map((movie) => (
            <MovieDetails key={movie._id} movie={movie} />
          ))}
      </div>
      <MovieForm />
    </div>
  );
};

export default Home;
