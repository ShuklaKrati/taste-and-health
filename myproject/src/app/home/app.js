// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mongo_crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// Middleware
app.use(bodyParser.json());

// Mongoose Schema
const TodoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema);

// Routes
// Create Todo
app.post('/todos', async (req, res) => {
    try {
        const { task, completed } = req.body;
        const todo = new Todo({
            task,
            completed
        });
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read All Todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read Todo by ID
app.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { task, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            task,
            completed
        });
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
