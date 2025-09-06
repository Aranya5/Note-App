import express from 'express';
import notesRouter from './routes/noteRoutes.js';

const app = express();

app.use("/api/notes", notesRouter);



app.listen(5001, () => {
  console.log('Server is running on port 5001');
});