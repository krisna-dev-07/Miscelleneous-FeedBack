import express from 'express'
const app = express();
const PORT = 8080;

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
    res.send("Welcome to Express Backend!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

app.get("/api/data", (req, res) => {
    res.json({ message: "This is sample data from the API" });
});

app.post("/api/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!` });
});

export default app;