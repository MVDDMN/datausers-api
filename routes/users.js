const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Get user by id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Create a new user
router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
});

// Update a user
router.put('/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
});

// Delete a user
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});

module.exports = router;
