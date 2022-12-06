import { Request, Response } from "express";
// import DBcontext from "../../config/ConnectionDB";

export function getUsers(_req: Request, res: Response) {
  try {
    return res.json({ message: "all users", arr: [] });
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}

export function postUser(_req: Request, res: Response) {
  try {
    return res.send([{ message: "POST USERRR  users" }]);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}