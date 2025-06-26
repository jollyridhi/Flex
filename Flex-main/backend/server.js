// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB URI
// const uri = 'mongodb+srv://Udit:Matrix@udit-db.t8hgw.mongodb.net/';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   bodyAge: { type: Number },
//   bodyType: { type: String },
//   height: { type: Number },
//   weight: { type: Number },
//   activityLevel: { type: String },
//   gender: { type: String },
//   goal: { type: String }
// });

// const User = mongoose.model('User', userSchema);

// // Route to create a user with the name
// app.post("/api/users", async (req, res) => {
//   try {
//     const { name } = req.body; 
//     const newUser = new User({ name });
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Route to update the user's age
// app.put("/api/users/:id/age", async (req, res) => {
//   const { age } = req.body;
//   const { id } = req.params;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(id, { bodyAge: age }, { new: true });
//     res.status(200).json({ message: "Age updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Similarly, create routes for other fields (gender, height, etc.)
// app.put("/api/users/:id/gender", async (req, res) => {
//   const { gender } = req.body;
//   const { id } = req.params;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(id, { gender }, { new: true });
//     res.status(200).json({ message: "Gender updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put("/api/users/:id/height", async (req, res) => {
//   const { height } = req.body;
//   const { id } = req.params;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(id, { height }, { new: true });
//     res.status(200).json({ message: "Height updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Continue with similar routes for weight, goal, body type, etc.

// // Start the server
// app.listen(5002, () => {
//   console.log('Server running on port 5002');
// });

// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();

// app.use(express.json());

// app.post('/api/mongodb-check', async (req, res) => {
//   const { connectionString } = req.body;

//   try {
//     const client = new MongoClient(connectionString);
//     await client.connect();
//     await client.db('admin').command({ ping: 1 });
//     await client.close();

//     res.status(200).json({ connected: true });
//   } catch (error) {
//     res.status(500).json({ connected: false, message: error.message });
//   }
// });

// app.listen(5002, () => console.log('Server running on port 5002'));


// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('./User'); // Assuming you have a User model

// const app = express();
// app.use(express.json());

// app.post('/api/users', async (req, res) => {
//   const { Name, Age, Gender, Height, Weight, Goal, BodyType, equipment } = req.body;

//   try {
//     // Check if a user exists based on unique identifier or create a new one
//     let user = await User.findOne({ Name }); // You could use a unique field like email or userId

//     if (!user) {
//       // Create a new user
//       user = new User({
//         Name,
//         Age,
//         Gender,
//         Height,
//         Weight,
//         Goal,
//         BodyType,
//         equipment,
//       });
//       await user.save(); // Save new user to MongoDB
//     } else {
//       // Optionally, update the user if they exist (this depends on your use case)
//       user.age = age;
//       user.gender = gender;
//       user.height = height;
//       user.weight = weight;
//       user.goal = goal;
//       user.bodyType = bodyType;
//       user.equipment = equipment;

//       await user.save(); // Save updated user to MongoDB
//     }

//     res.status(200).json({ message: 'User saved successfully', user });
//   } catch (error) {
//     console.error('Error saving user:', error);
//     res.status(500).json({ error: 'Failed to save user' });
//   }
// });

// mongoose.connect('mongodb+srv://Udit:Matrix@udit-db.t8hgw.mongodb.net/your-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.listen(5002, () => console.log('Server running on port 5002'));


const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('MongoDB_String', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create a new user
app.post('/users', async (req, res) => {
  const { name, age, gender, height, weight, goal, bodyType, equipment } = req.body;

  // Basic validation
  // if (!name || !age || !gender || !height || !weight || !goal || !bodyType || !equipment) {
  //   return res.status(400).json({ error: 'All fields are required.' });
  // }

  try {
    const user = new User(req.body); // req.body should have all fields
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));