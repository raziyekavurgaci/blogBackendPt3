import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./model";

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers;
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};
export const updatedUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const editedUser = await updateUser(Number(id), req.body);
    res.json(editedUser);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};
export const deletedUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const throwUser = await deleteUser(Number(id));
    res.json(throwUser);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};
