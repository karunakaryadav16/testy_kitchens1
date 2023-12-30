const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const app = express();
const port = 2024;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB connection setup
const MONGODB_URI = 'mongodb+srv://karunakaryadav167:Testy7266046@cluster0.r05755c.mongodb.net/your-database-name?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.log('Error in connecting to MongoDB database');
    console.error(error);
  });

// User model schema with the collection name "user_details"
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
}, { collection: 'user_details' });

const User = mongoose.model('User', userSchema);

// Dynamic secret key generation function
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Register API
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(200).json({ message: 'User Already Exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error During Registration' });
  }
});

// Login API
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json('Invalid credentials');
    }

    // Generate a new secret key for each login
    const secretKey = generateSecretKey();

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    // Set the token in a secure cookie
    res.cookie('jwt', token, {
    //  httpOnly: true,
      expires: new Date(Date.now() + 3600000), // 1 hour
    });

    res.status(200).json({  token,message: 'Login successful' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
