import express from 'express';

const router = express.Router();

// Get all movies
router.get('/', (req, res) => {
  return res.json({ message: 'get all movies' });
});

// Create movie
router.post('/', (req, res) => {
  return res.json({ message: 'create movie' });
});

// Get movie by ID
router.get('/:id', (req, res) => {
  return res.json({ message: 'get movie by id' });
});

// Update movie by ID
router.patch('/:id', (req, res) => {
  return res.json({ message: 'update movie by id' });
});

// Delete movie by ID
router.delete('/:id', (req, res) => {
  return res.json({ message: 'delete movie by id' });
});

export default router;
