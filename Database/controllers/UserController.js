const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); // Use res.json for API response
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).send('User created');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};