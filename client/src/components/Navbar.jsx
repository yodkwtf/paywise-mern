import { Link } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useAuthContext();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Cinematica</h1>
        </Link>

        <nav>
          <div>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
