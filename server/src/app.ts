import express from 'express';
import tourRouter from './routes/tour.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/api', tourRouter);

app.use(errorHandler);

export default app;
