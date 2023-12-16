import { createContext, useReducer, useState } from 'react';
import moviesReducer from '../reducers/moviesReducer';
import toast from 'react-hot-toast';
import useAuthContext from '../hooks/useAuthContext';
import { API_URL } from '../helpers/constants';

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
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  // Set form data when editing a movie
  const handleEdit = (movie) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({
      name: movie.name,
      genre: movie.genre,
      rating: movie.rating,
      releaseYear: movie.releaseYear,
      runtime: movie.runtime,
      plotSummary: movie.plotSummary,
    });
    setCurrentMovie(movie);
  };

  // # Get all movies
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/api/movies`, {
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
      const res = await fetch(`${API_URL}/api/movies`, {
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
      const res = await fetch(`${API_URL}/api/movies/${id}`, {
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

  // # Edit a movie
  const editMovie = async (e) => {
    e.preventDefault();

    if (!user) {
      return toast.error('You are not logged in');
    }

    try {
      const id = currentMovie?._id;

      const res = await fetch(`${API_URL}/api/movies/${id}`, {
        method: 'PATCH',
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
        setCurrentMovie(null);
        return;
      }

      // Handle success
      dispatch({ type: 'EDIT_MOVIE', payload: data.movie });
      setFormData({
        name: '',
        genre: '',
        rating: '',
        releaseYear: '',
        runtime: '',
        plotSummary: '',
      });
      setCurrentMovie(null);
      setIsEditing(false);
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
        editMovie,
        handleEdit,
        showForm,
        setShowForm,
        isEditing,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
