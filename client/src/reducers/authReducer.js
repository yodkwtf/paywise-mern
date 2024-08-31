const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isGuest: false };
    case 'SIGNUP':
      return { ...state, user: action.payload, isGuest: false };
    case 'LOGOUT':
      return { ...state, user: null, isGuest: false };
    case 'GUEST_LOGIN':
      return { ...state, user: action.payload, isGuest: true };
    default:
      return state;
  }
};

export default authReducer;
