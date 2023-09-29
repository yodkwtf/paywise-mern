import express from 'express';

const router = express.Router();

// Get all payments
router.get('/', (req, res) => {
  return res.json({ message: 'get all payments' });
});

// Create payment
router.post('/', (req, res) => {
  return res.json({ message: 'create payment' });
});

// Get payment by ID
router.get('/:id', (req, res) => {
  return res.json({ message: 'get payment by id' });
});

// Update payment by ID
router.patch('/:id', (req, res) => {
  return res.json({ message: 'update payment by id' });
});

// Delete payment by ID
router.delete('/:id', (req, res) => {
  return res.json({ message: 'delete payment by id' });
});

export default router;
