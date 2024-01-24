import { Request, Response } from 'express';
// import * as UserQueries from '../db/queries/userQueries';

export const createUser = async (req: Request, res: Response) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Ideally, hash the password here before saving it to the database
    // const hashedPassword = await hashPassword(password);

    // Create user in the database
    // const newUser = await UserQueries.createUser({ username, email, password });
    const newUser = { username, email, password, id: 1 };

    res.status(201).json(newUser);
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  return res
    .status(200)
    .json([{ username: 'test', email: 'a@b.com', password: 'ppwwprnvp', id: 1 }]);
};

export const getUserById = async (req: Request, res: Response) => {
  // Handle retrieving a single user by ID
};

export const updateUserById = async (req: Request, res: Response) => {
  // Handle updating a user by ID
};

export const deleteUserById = async (req: Request, res: Response) => {
  // Handle deleting a user by ID
};
