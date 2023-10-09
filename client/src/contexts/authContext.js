import { createContext, useEffect, useReducer, useState } from 'react';
import authReducer from '../reducers/authReducer';
import toast from 'react-hot-toast';
import {
  getFromLocal,
  removeFromLocal,
  saveToLocal,
} from '../helpers/localStorage';

export const AuthContext = createContext();

const initialState = {
  user: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // check for user token in LS
  useEffect(() => {
    const user = getFromLocal('CINEMATICA_USER');
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  console.log('AuthContext state:', state);

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  // # Signup user
  const signup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      // Handle bad request
      if (!res.ok) {
        setIsLoading(false);
        toast.error(data.error);
        return;
      }

      // Handle success
      saveToLocal('CINEMATICA_USER', data.user);
      dispatch({ type: 'SIGNUP', payload: data.user });
      toast.success(data?.message);

      setIsLoading(false);
      setFormState({ email: '', password: '' });
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
    }
  };

  // # Login user
  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      // Handle bad request
      if (!res.ok) {
        setIsLoading(false);
        toast.error(data.error);
        return;
      }

      // Handle success
      saveToLocal('CINEMATICA_USER', data.user);
      dispatch({ type: 'LOGIN', payload: data.user });
      toast.success(data?.message);

      setIsLoading(false);
      setFormState({ email: '', password: '' });
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
    }
  };

  // # Logout user
  const logout = async () => {
    try {
      // Handle success
      removeFromLocal('CINEMATICA_USER');
      dispatch({ type: 'LOGOUT' });
      toast.success('Logged out');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        formState,
        setFormState,
        isLoading,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
