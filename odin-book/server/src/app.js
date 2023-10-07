import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';
import requestLogger from './middlewares/requestLogger.js';
import errorHandler from './middlewares/errorHandler.js';
import unknowEndpoint from './middlewares/unknownEndpoint.js';
import connectToDatabase from './database.js';

const app = express();
connectToDatabase();

// middlewares
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://asdaois.github.io/',
      'https://asdaois.github.io/odin-book',
    ],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(express.static('../client/build'));
// end middlewares

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.use(unknowEndpoint);
app.use(errorHandler);

export default app;
