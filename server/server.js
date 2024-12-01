// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config(); // To use environment variables

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('MongoDB connection error:', error));

// Define User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Signup route
app.post('/api/signup', async (req, res) => {
    const { username, fullName, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            fullName,
            email,
            password: hashedPassword
        });

        // Save to MongoDB
        await newUser.save();

        res.status(201).json({ message: 'User signed up successfully!' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Failed to sign up user' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
