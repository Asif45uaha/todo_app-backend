import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  text: {
    type: String,
  },
});

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;
