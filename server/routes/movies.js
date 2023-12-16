import express from 'express';
import {
  createMovie,
  deleteMovieById,
  getMovieById,
  getMovies,
  updateMovieById,
} from '../controllers/movies.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// check authentication before calling any of the routes below
router.use(auth);

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie-related APIs
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     description: Get a list of all movies for the authenticated user.
 *     responses:
 *       200:
 *         description: Returns a list of movies
 *       404:
 *         description: No movies found
 */
router.get('/', getMovies);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     description: Create a new movie entry.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               rating:
 *                 type: number
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               plotSummary:
 *                 type: string
 *               runtime:
 *                 type: number
 *           required:
 *             - name
 *             - rating
 *             - genre
 *           example:
 *             name: The Godfather
 *             rating: 9.2
 *             genre: Drama
 *             releaseYear: 1972
 *             plotSummary: The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
 *             runtime: 175
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Missing required fields
 *       409:
 *         description: Movie already exists
 */
router.post('/', createMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     description: Get a movie by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the movie to get
 *     responses:
 *       200:
 *         description: Movie fetched successfully
 *       400:
 *         description: Invalid movie ID
 *       404:
 *         description: Movie not found
 */
router.get('/:id', getMovieById);

/**
 * @swagger
 * /api/movies/{id}:
 *   patch:
 *     summary: Update a movie by ID
 *     tags: [Movies]
 *     description: Update a movie by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the movie to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               rating:
 *                 type: number
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               plotSummary:
 *                 type: string
 *               runtime:
 *                 type: number
 *           required:
 *             - name
 *             - rating
 *             - genre
 *           example:
 *             name: Updated Movie
 *             rating: 8.5
 *             genre: Action
 *             releaseYear: 2022
 *             plotSummary: An updated plot summary.
 *             runtime: 120
 *     responses:
 *       200:
 *         description: Movie updated
 *       400:
 *         description: Invalid movie ID or missing required fields
 *       404:
 *         description: Movie not found
 */
router.patch('/:id', updateMovieById);

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags: [Movies]
 *     description: Delete a movie by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the movie to delete
 *     responses:
 *       200:
 *         description: Movie deleted
 *       400:
 *         description: Invalid movie ID
 *       404:
 *         description: Movie not found
 */
router.delete('/:id', deleteMovieById);

export default router;
