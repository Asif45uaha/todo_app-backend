import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongo_Connection = async () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.tpr5j.mongodb.net:27017,cluster0-shard-00-01.tpr5j.mongodb.net:27017,cluster0-shard-00-02.tpr5j.mongodb.net:27017/?ssl=true&replicaSet=atlas-wfnrwc-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("error in connecting the database");
  }
};

export default mongo_Connection;
