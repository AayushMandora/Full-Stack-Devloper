import express from "express";
import mongoose from "mongoose";
import { Employee } from "./modules/data.js";
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/generate", async (req, res) => {
  let con = mongoose.connect("mongodb://127.0.0.1:27017/company");
  let name = ["Aayush", "Aafi", "Maharshi"];
  let langauge = ["python", "javascript", "java"]; 
  function rand(arr) {
    return Math.floor(Math.random() * (arr.length));
  }
  console.log(rand);
  await Employee.deleteMany({});
  for (let i = 0; i < 10; i++) {
    const datas = await Employee.create({
      name: name[rand(name)],
      salary: Math.floor(Math.random() * 100000),
      langauge: langauge[rand(langauge)],
      isManager: Math.random()>0.5?true:false,
    });
  }
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is Ready......${port}`);
});
