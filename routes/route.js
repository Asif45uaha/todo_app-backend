import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getSingleTodo,
  UpdateTodo,
} from "../controllers/controller.js";
const Router = express.Router();

//apis
Router.post("/", createTodo);
Router.get("/", getAllTodos);
Router.get("/:id", getSingleTodo);
Router.put("/:id", UpdateTodo);
Router.delete("/:id", deleteTodo);

export default Router;
