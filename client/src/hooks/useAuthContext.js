import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const useAuthContext = () => {
  const contextData = useContext(AuthContext);

  if (!contextData) {
    throw new Error(
      'useAuthContext must be used within a AuthProvider component'
    );
  }

  return contextData;
};

export default useAuthContext;
