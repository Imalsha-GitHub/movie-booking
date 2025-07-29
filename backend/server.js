import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectDB } from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from 'inngest/express';
import { functions, inngest } from './inngest/index.js';

const app = express();
const port = 3000;

await connectDB();

// Middleware
// built-in middleware parses incoming JSON request bodies.
app.use(express.json());

// allows backend server to accept requests from different origins
app.use(cors());
app.use(clerkMiddleware())

// API Routes
app.get('/', (req, res) => res.send("iMovie Backend Server is running"));
app.use('/api/inngest', serve({client: inngest, functions}))

// starts Express server, making it listen for incoming HTTP requests on the specified port
// app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));

app.use('/api/inngest', serve({client: inngest, functions}))