// src/routes/authRoutes.js
import { Router } from 'express';
import { signup, login } from '../Controller/authController.js';
import { requireAuth, requireRole } from '../middleware/authMiddleware.js';

const router = Router();

// public
router.post('/signup', signup);
router.post('/login', login);

// protected example: any logged-in user
router.get('/me', requireAuth, (req, res) => {
  res.json({ message: 'Hello user', userId: req.user.id, role: req.user.role });
});

// protected example: admin only
router.get('/admin-page', requireAuth, requireRole('admin'), (req, res) => {
  res.json({ message: 'Hello admin', userId: req.user.id });
});

export default router;
