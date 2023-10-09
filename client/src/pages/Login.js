import useAuthContext from '../hooks/useAuthContext';

const Login = () => {
  const { login, formState, setFormState, isLoading } = useAuthContext();

  return (
    <form className="login" onSubmit={login}>
      <h3>Log in</h3>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Enter password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
      </div>

      <button type="submit" disabled={isLoading}>
        Log in
      </button>
    </form>
  );
};
export default Login;
