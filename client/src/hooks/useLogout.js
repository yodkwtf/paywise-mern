import toast from 'react-hot-toast';
import { removeFromLocal } from '../helpers/localStorage';
import useAuthContext from './useAuthContext';
import useMoviesContext from './useMoviesContext';

const useLogout = () => {
  const { dispatch: AuthDispatch } = useAuthContext();
  const { dispatch: MoviesDispatch } = useMoviesContext();

  const logout = async () => {
    try {
      removeFromLocal('CINEMATICA_USER');
      AuthDispatch({ type: 'LOGOUT' });
      MoviesDispatch({ type: 'CLEAR_MOVIES' });
      toast.success('Logged out');
    } catch (error) {
      toast.error(error);
    }
  };

  return logout;
};

export default useLogout;
