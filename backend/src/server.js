import express from 'express';
import notesRouter from './routes/noteRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRouter);

connectDB();

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
