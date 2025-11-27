// index.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js'; // <-- add this

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('API running');
});

// Auth routes
app.use('/api/auth', authRoutes); // <-- add this

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
