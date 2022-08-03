import express from 'express';
import usersRouter from './routers/usersRouter.js';
import MongoClient from './daos/MongoClient.js';

const app = express();
const server = app.listen(3000, () => console.log('Now listening...'));
let client = new MongoClient();
client.connect();

app.use(express.json());
app.use('/users', usersRouter);
