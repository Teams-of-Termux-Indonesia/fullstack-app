import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(notFound);
app.use(errorHandler);
app.use('/api/users',userRouter);

app.listen(port,()=>console.log(`Server started on port ${port}`));
