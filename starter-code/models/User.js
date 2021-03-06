const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  fullname: String,
  email: String,
  summary: String,
  imageUrl: String,
  company: String,
  jobTitle: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

//unique username
userSchema.index( { "username": 1 }, { unique: true } );

const User = mongoose.model('User', userSchema);

module.exports = User;
