// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   gender: { type: String, required: true },
//   height: { type: Number, required: true },
//   weight: { type: Number, required: true },
//   goal: { type: String, required: true },
//   bodyType: { type: String, required: true },
//   equipment: { type: Object, required: true }, // Store equipment selection as an object
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  goal: { type: String, required: true },
  bodyType: { type: String, required: true },
  equipment: { type: Object, required: true }, // Store equipment selection as an object
});

const User = mongoose.model('User', userSchema);

module.exports = User;
