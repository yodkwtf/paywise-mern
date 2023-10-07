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
    default:
      return state;
  }
};

export default moviesReducer;
