import express from 'express';
import {
  createUser,
  // getUserById,
  // updateUserById,
  // deleteUserById,
  getUsers,
} from '../controllers/users';

const users = express.Router();

users.get('/', (req, res) => {
  res.send('ah!');
});
users.post('/users', createUser);
users.get('/users', getUsers);
// users.get('/users/:id', getUserById);
// users.patch('/users/:id', updateUserById);
// users.delete('/users/:id', deleteUserById);

export default users;
