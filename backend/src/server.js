import express from 'express';
import notesRouter from './routes/noteRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: "http://localhost:5173"
})); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware


// app.use((req, res, next) => {
//   console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRouter); 


connectDB().then(() => {
  app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});


