import { useState, useEffect } from 'react';
import MovieDetails from '../components/MovieDetails';

const Home = () => {
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    const res = await fetch('/api/movies');
    const data = await res.json();

    console.log(data);

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
    </div>
  );
};

export default Home;
