import express, { NextFunction, Request, Response } from 'express'; // express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes';
import middleware from './src/middleware';
import ejs from 'ejs';
// import { pool } from './db/connection';

const app = express();
const port = process.env.PORT || 5174;

// Body parser middleware to parse JSON requests
app.use(bodyParser.json());

// User routes
app.use('/', routes);

app.use(middleware); // currently errors only - is this middleware?

// Connect to the database
// pool
//   .connect()
//   .then(() => console.log('Connected to database'))
//   .catch(err => console.error('Database connection error', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
