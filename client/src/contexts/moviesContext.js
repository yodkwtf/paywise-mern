import { createContext, useReducer, useState } from 'react';
import moviesReducer from '../reducers/moviesReducer';
import toast from 'react-hot-toast';

export const MoviesContext = createContext();

const initialState = {
  movies: null,
};

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    rating: '',
    releaseYear: '',
    runtime: '',
  });

  // # Get all movies
  const fetchMovies = async () => {
    try {
      const res = await fetch('/api/movies');
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: 'GET_MOVIES', payload: data.movies });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // # Create a movie
  const createMovie = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/movies', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      // Handle bad request
      if (!res.ok) {
        return toast.error(data.error);
      }

      // Handle success
      dispatch({ type: 'CREATE_MOVIE', payload: data.movie });
      setFormData({
        title: '',
        genre: '',
        rating: '',
        releaseYear: '',
        runtime: '',
      });
      toast.success('Movie Added!');
    } catch (err) {
      toast.error(err);
    }
  };

  // # Delete a movie
  const deleteMovie = async (id) => {
    try {
      const res = await fetch(`/api/movies/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      // Handle bad request
      if (!res.ok) {
        return toast.error(data.error);
      }

      // Handle success
      dispatch({ type: 'DELETE_MOVIE', payload: id });
      toast.success('Movie Deleted!');
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        formData,
        setFormData,
        fetchMovies,
        createMovie,
        deleteMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
