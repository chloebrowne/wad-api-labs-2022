import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import usersRouter from './api/users';
import './db';
import './seedData'




dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);



app.listen(port, () => {
  console.info(`Server running at ${port}`);
});