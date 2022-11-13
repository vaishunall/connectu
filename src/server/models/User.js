const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: Number, 
    account_type: String,
    name: String,
    email: String,
    phone: String,
    bio: String,
    institution_name: String,
    photoURL: String,
    website: String,
  },
);

module.exports = mongoose.model("User", userSchema);