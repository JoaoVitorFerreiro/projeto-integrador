import express from "express";
import { ProjectController } from "./controllers/ProjectController";
export const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

try {
  ProjectController();

  const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

  server.on('error', (error: any) => {
    console.error('Server error:', error);
  });

  process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection at:', promise, 'reason:', reason);
    process.exit(1);
  });
} catch (error) {
  console.error('Error starting server:', error);
  process.exit(1);
}
