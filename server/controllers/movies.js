import Movie from '../models/Movie.js';
import { isValidMongoId } from '../utils/helper.js';

/**
 * @description Get all movies
 * @route GET /api/movies
 */
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ createdAt: -1 });

    if (!movies) {
      return res.status(404).json({ error: 'No movies found' });
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

  // Check if required fields are not empty
  const emptyFields = [];

  if (!name) emptyFields.push('name');
  if (!rating) emptyFields.push('rating');
  if (!genre) emptyFields.push('genre');

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please add the required fields', emptyFields });
  }

  try {
    // Check if movie already exists
    const existingMovie = await Movie.findOne({ name }).collation({
      locale: 'en',
      strength: 2,
    });
    if (existingMovie) {
      return res
        .status(400)
        .json({ error: 'Movie already exists', emptyFields });
    }

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
    return res.status(500).json({ error: error.message, emptyFields });
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
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
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
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    const movie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
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
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    const movie = await Movie.findOneAndDelete({ _id: req.params.id });
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
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
