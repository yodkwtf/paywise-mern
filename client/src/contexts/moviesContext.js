import { createContext, useReducer, useState } from 'react';
import moviesReducer from '../reducers/moviesReducer';
import toast from 'react-hot-toast';
import useAuthContext from '../hooks/useAuthContext';

export const MoviesContext = createContext();

const initialState = {
  movies: null,
};

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    rating: '',
    releaseYear: '',
    runtime: '',
    plotSummary: '',
  });
  const [emptyFields, setEmptyFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // # Get all movies
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/movies', {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: 'GET_MOVIES', payload: data.movies });
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error);
      setIsLoading(false);
    }
  };

  // # Create a movie
  const createMovie = async (e) => {
    e.preventDefault();

    if (!user) {
      return toast.error('You are not logged in');
    }

    try {
      const res = await fetch('/api/movies', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();

      // Handle bad request
      if (!res.ok) {
        toast.error(data.error);
        setEmptyFields(data.emptyFields);
        return;
      }

      // Handle success
      dispatch({ type: 'CREATE_MOVIE', payload: data.movie });
      setFormData({
        name: '',
        genre: '',
        rating: '',
        releaseYear: '',
        runtime: '',
        plotSummary: '',
      });
      toast.success(data?.message);
    } catch (err) {
      toast.error(err);
    }
  };

  // # Delete a movie
  const deleteMovie = async (id) => {
    if (!user) {
      return toast.error('You are not logged in');
    }

    try {
      const res = await fetch(`/api/movies/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();

      // Handle bad request
      if (!res.ok) {
        return toast.error(data.error);
      }

      // Handle success
      dispatch({ type: 'DELETE_MOVIE', payload: id });
      toast.success(data?.message);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        formData,
        emptyFields,
        isLoading,
        dispatch,
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

export default MoviesProvider;
