import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import { pool } from './db/connection';

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware to parse JSON requests
app.use(bodyParser.json());

// User routes
app.use('/users', userRoutes);

// Connect to the database
pool
  .connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
