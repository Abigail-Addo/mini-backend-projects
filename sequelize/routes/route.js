// const router = require("express").Router();
import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  addUserWithProfile,
  getUsersProfile,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);
router.post("/users/post", addUserWithProfile);
router.get("/users/profiles", getUsersProfile);

export default router;
