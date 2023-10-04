import Movie from '../models/Movie.js';
import { isValidMongoId } from '../utils/helper.js';

/**
 * @description Get all movies
 * @route GET /api/movies
 */
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ name: 1 });

    if (!movies) {
      return res.status(404).json({ message: 'No movies found' });
    }

    return res.json({
      message: 'Movies fetched successfully',
      movies,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @description Create movie
 * @route POST /api/movies
 */
const createMovie = async (req, res) => {
  const { name, rating, genre, releaseYear, plotSummary, runtime } = req.body;

  if (!name || !rating || !genre || !releaseYear || !runtime) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const movie = await Movie.create({
      name,
      rating,
      genre,
      releaseYear,
      plotSummary,
      runtime,
    });
    return res.status(201).json({
      message: 'Movie created successfully',
      movie,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @description Get movie by ID
 * @route GET /api/movies/:id
 */
const getMovieById = async (req, res) => {
  try {
    const isValidId = isValidMongoId(req.params.id);
    if (!isValidId) {
      return res.status(400).json({ message: 'Invalid movie ID' });
    }

    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    return res.json({
      message: 'Movie fetched successfully',
      movie,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @description Update movie by ID
 * @route PATCH /api/movies/:id
 */
const updateMovieById = async (req, res) => {
  try {
    const isValidId = isValidMongoId(req.params.id);
    if (!isValidId) {
      return res.status(400).json({ message: 'Invalid movie ID' });
    }

    const movie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    return res.json({
      message: 'Movie updated successfully',
      movie,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @description Delete movie by ID
 * @route DELETE /api/movies/:id
 */
const deleteMovieById = async (req, res) => {
  try {
    const isValidId = isValidMongoId(req.params.id);
    if (!isValidId) {
      return res.status(400).json({ message: 'Invalid movie ID' });
    }

    const movie = await Movie.findOneAndDelete({ _id: req.params.id });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    return res.json({
      message: 'Movie deleted successfully',
      movie,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export {
  getMovies,
  createMovie,
  getMovieById,
  updateMovieById,
  deleteMovieById,
};
