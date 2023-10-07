import { useContext } from 'react';
import { MoviesContext } from '../contexts/moviesContext';

const useMoviesContext = () => {
  const contextData = useContext(MoviesContext);

  if (!contextData) {
    throw new Error(
      'useMoviesContext must be used within a MoviesProvider component'
    );
  }

  return contextData;
};

export default useMoviesContext;
