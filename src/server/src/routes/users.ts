import express from 'express';
import {
  createUser,
  // getUserById,
  // updateUserById,
  // deleteUserById,
  getUsers,
} from '../controllers/users';

const users = express.Router();

users.post('/', createUser);
users.get('/', getUsers);
// users.get('/users/:id', getUserById);
// users.patch('/users/:id', updateUserById);
// users.delete('/users/:id', deleteUserById);

export default users;
