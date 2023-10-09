import { createContext, useReducer, useState } from 'react';
import authReducer from '../reducers/authReducer';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

const initialState = {
  user: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
