import express from "express"
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors"

const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);
const dbName = 'Passwords';
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(cors());

client.connect();

app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passes');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

app.post('/', async(req, res) => {
    const password=req.body;
    console.log(password);
    const db = client.db(dbName);
    const collection = db.collection('passes');
    const insertResult = await collection.insertOne(password);
    res.send(req.body);
})

app.delete('/', async(req, res) => {
    const password=req.body;
    const db = client.db(dbName);
    const collection = db.collection('passes');
    const insertResult = await collection.deleteOne(password);
    res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})