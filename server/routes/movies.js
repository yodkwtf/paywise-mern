import express from 'express';
import {
  createMovie,
  deleteMovieById,
  getMovieById,
  getMovies,
  updateMovieById,
} from '../controllers/movies.js';

const router = express.Router();

// Get all movies
router.get('/', getMovies);

// Create movie
router.post('/', createMovie);

// Get movie by ID
router.get('/:id', getMovieById);

// Update movie by ID
router.patch('/:id', updateMovieById);

// Delete movie by ID
router.delete('/:id', deleteMovieById);

export default router;
