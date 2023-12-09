import Input from '../components/Inputs/Input';
import useAuthContext from '../hooks/useAuthContext';

const Login = () => {
  const { login, formState, setFormState, isLoading } = useAuthContext();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <form className="login" onSubmit={login}>
      <h3>Log in</h3>

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
        Log in
      </button>
    </form>
  );
};
export default Login;
