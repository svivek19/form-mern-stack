// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { firstname, lastname, number, email, password } = req.body;

  try {
    const user = new User({ firstname, lastname, number, email, password });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
