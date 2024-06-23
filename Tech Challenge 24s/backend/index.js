import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config.js";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

const sampleItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const sampleItem = mongoose.model("sampleItem", sampleItemSchema);

app.get("/getItems", async (req, res) => {
  let items = await sampleItem.find();
  return res.status(200).send(items);
});

app.post("/create", async (req, res) => {
  let newItem = await sampleItem.create(req.body);
  return res.status(200).send(newItem);
});

mongoose.connect(config.mongoDbUrl).then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on ${PORT}`);
  });
});
