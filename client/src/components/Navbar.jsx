import { Link } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import useLogout from '../hooks/useLogout';

const Navbar = () => {
  const { user } = useAuthContext();
  const logout = useLogout();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Cinematica</h1>
        </Link>

        <nav>
          {user ? (
            <div>
              <span>{user?.email}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
