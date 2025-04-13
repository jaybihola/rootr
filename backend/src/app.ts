import express, { Express } from 'express';

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;