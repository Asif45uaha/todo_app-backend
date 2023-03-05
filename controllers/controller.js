import todoModel from "../models/model.js";

export const createTodo = async (req, res) => {
  const { text } = req.body;

  try {
    const todos = await todoModel.create({ text });
    res.status(201).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const Alltodos = await todoModel.find({});
    res.status(200).json(Alltodos);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getSingleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const user = await todoModel.findById(id);
      res.status(200).json(user);
    } else {
      res.status(400).json("couldn't get user id");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const UpdateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const update_user = await todoModel.findByIdAndUpdate(id, req.body);
      res.status(201).json(update_user);
    } else {
      res.status(400).json("couldn't get user id");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted_user = await todoModel.findByIdAndDelete(id);
    res.status(200).json(deleted_user);
  } catch (error) {
    res.status(400).json(error);
  }
};
