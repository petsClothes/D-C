const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
       require: true
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    admin: {
      type: Boolean,
      default: false,
    },
  });
module.exports= User = mongoose.model('User', UserSchema);