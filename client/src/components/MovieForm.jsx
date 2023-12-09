import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import useMoviesContext from '../hooks/useMoviesContext';
import Input from './Inputs/Input';
import Textarea from './Inputs/Textarea';

const MovieForm = () => {
  const [showForm, setShowForm] = useState(false);
  const { formData, setFormData, emptyFields, createMovie } =
    useMoviesContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getClassName = (field) => {
    return emptyFields?.includes(field) ? 'error' : '';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868) {
        setShowForm(true);
      }
    };
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="form-header">
        <h3>Add a New Movie</h3>
        <button className="btn-dropdown" onClick={() => setShowForm(!showForm)}>
          {showForm ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {showForm && (
        <form className="create" onSubmit={createMovie}>
          <Input
            labelFor="name"
            label="Movie Name:*"
            name="name"
            id="name"
            placeholder='e.g. "The Social Network"'
            value={formData.name}
            onChange={handleChange}
            className={getClassName('name')}
          />

          <div className="form-row">
            <Input
              labelFor="genre"
              label="Genre:*"
              name="genre"
              id="genre"
              value={formData.genre}
              onChange={handleChange}
              className={getClassName('genre')}
            />

            <Input
              labelFor="rating"
              label="Rating (out of 10):*"
              type="number"
              name="rating"
              id="rating"
              value={formData.rating}
              onChange={handleChange}
              className={getClassName('rating')}
            />
          </div>

          <div className="form-row">
            <Input
              labelFor="releaseYear"
              label="Release Year:"
              type="number"
              name="releaseYear"
              id="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
            />

            <Input
              labelFor="runtime"
              label="Runtime (in mins):"
              type="number"
              name="runtime"
              id="runtime"
              value={formData.runtime}
              onChange={handleChange}
            />
          </div>

          <Textarea
            labelFor="plotSummary"
            label="Plot Summary:"
            name="plotSummary"
            id="plotSummary"
            value={formData.plotSummary}
            onChange={handleChange}
          />

          <button type="submit">Add Movie</button>
        </form>
      )}
    </>
  );
};

export default MovieForm;
