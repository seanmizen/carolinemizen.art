import express from 'express';
import users from './users';

const router = express.Router();

router.use('/users', users);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;
