const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        movies: action.payload,
      };
    case 'CREATE_MOVIE':
      return {
        movies: [action.payload, ...state.movies],
      };
    case 'DELETE_MOVIE':
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case 'EDIT_MOVIE':
      return {
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case 'CLEAR_MOVIES':
      return {
        movies: [],
      };
    default:
      return state;
  }
};

export default moviesReducer;
