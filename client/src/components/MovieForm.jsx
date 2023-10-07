import useMoviesContext from '../hooks/useMoviesContext';

const MovieForm = () => {
  const { formData, setFormData, emptyFields, createMovie } =
    useMoviesContext();

  return (
    <form className="create" onSubmit={createMovie}>
      <h3>Add a New Movie</h3>

      <div className="form-group">
        <label htmlFor="name">Movie Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder='e.g. "The Social Network"'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={emptyFields.includes('name') ? 'error' : ''}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
            className={emptyFields.includes('genre') ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (out of 10):</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: e.target.value })
            }
            className={emptyFields.includes('rating') ? 'error' : ''}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
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
        </div>

        <div className="form-group">
          <label htmlFor="runtime">Runtime (in mins):</label>
          <input
            type="number"
            name="runtime"
            id="runtime"
            value={formData.runtime}
            onChange={(e) =>
              setFormData({ ...formData, runtime: e.target.value })
            }
          />
        </div>
      </div>

      <label htmlFor="plotSummary">Plot Summary:</label>
      <textarea
        name="plotSummary"
        id="plotSummary"
        value={formData.plotSummary}
        onChange={(e) =>
          setFormData({ ...formData, plotSummary: e.target.value })
        }
      />

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
