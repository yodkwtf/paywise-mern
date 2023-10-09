import useAuthContext from '../hooks/useAuthContext';

const Signup = () => {
  const { signup, formState, setFormState, isLoading } = useAuthContext();

  return (
    <form className="signup" onSubmit={signup}>
      <h3>Sign up</h3>

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
        Sign up
      </button>
    </form>
  );
};
export default Signup;
