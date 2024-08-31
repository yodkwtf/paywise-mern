import Input from '../components/Inputs/Input';
import useAuthContext from '../hooks/useAuthContext';

const Signup = () => {
  const { signup, formState, setFormState, isLoading, guestLogin } =
    useAuthContext();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <form className="signup" onSubmit={signup}>
      <h3>Sign up</h3>

      <Input
        labelFor="name"
        label="Name"
        type="name"
        name="name"
        id="name"
        placeholder="Enter name"
        value={formState.name}
        onChange={handleChange}
      />

      <Input
        labelFor="email"
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        value={formState.email}
        onChange={handleChange}
      />

      <Input
        labelFor="password"
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        value={formState.password}
        onChange={handleChange}
        autoComplete="off"
      />

      <button type="submit" disabled={isLoading}>
        Sign up
      </button>

      <div className="divider">
        <hr />
        <span>or</span>
      </div>

      <button type="submit" className="guest-btn" onClick={guestLogin}>
        Log in as Guest
      </button>
    </form>
  );
};
export default Signup;
