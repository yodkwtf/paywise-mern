import { useState, useEffect } from 'react';
import MovieDetails from '../components/MovieDetails';
import MovieForm from '../components/MovieForm';

const Home = () => {
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    const res = await fetch('/api/movies');
    const data = await res.json();

    if (res.ok) {
      setMovies(data?.movies);
    }
  };

  useEffect(() => {
    fetchMovies();
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
