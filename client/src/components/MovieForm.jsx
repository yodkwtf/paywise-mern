import useMoviesContext from '../hooks/useMoviesContext';

const MovieForm = () => {
  const { formData, setFormData, createMovie } = useMoviesContext();

  return (
    <form className="create" onSubmit={createMovie}>
      <h3>Add a New Movie</h3>

      <label htmlFor="name">Movie Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        name="genre"
        id="genre"
        value={formData.genre}
        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        name="rating"
        id="rating"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
      />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        type="number"
        name="releaseYear"
        id="releaseYear"
        value={formData.releaseYear}
        onChange={(e) =>
          setFormData({ ...formData, releaseYear: e.target.value })
        }
      />

      <label htmlFor="runtime">Runtime:</label>
      <input
        type="number"
        name="runtime"
        id="runtime"
        value={formData.runtime}
        onChange={(e) => setFormData({ ...formData, runtime: e.target.value })}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
