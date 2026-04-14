const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String,

    },
    googleId: {
        type: String,
        unique: true, // Google ID must be unique
        sparse: true // Allows multiple documents to have null googleId values (useful for local users)
    },
    userName: {
        type: String,
        required: false, // Username is optional, especially for initial local sign-ups
        unique: true, // Ensure usernames are unique
        sparse: true // Allows multiple documents to have null userName values (useful for local users)
    },
    name: {
        type: String,
        required: false // Name is optional, especially for initial local sign-ups
    },
    profilePicture: {
        type: String,
        required: false // Profile picture URL is optional
    },
    verifyEmailToken: {
      type: String,
      default: "",
    },
    verifyEmailTokenExpireAt: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordTokenExpireAt: {
      type: Number,
      default: 0,
    },
    registrationMethod: { 
      type: String, 
      enum: ['google', 'local']
    },
}, {timestamps: true}); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);
module.exports = User;
// This code defines a Mongoose schema for a User model in a Node.js application.