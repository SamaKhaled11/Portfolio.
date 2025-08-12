const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    jobTitle:String,
    freelance:String,
    location:String,
    userImage:String
});

const User = mongoose.model("User",UserSchema);
module.exports =User;