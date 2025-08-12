const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js');


router.get('/', async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

router.get('/:id',getUser,(req,res)=>{
    res.json(res.user)
});

router.post('/', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        freelance: req.body.freelance,
        location: req.body.location,
        userImage: req.body.userImage
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age; 
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.jobTitle != null) {
    res.user.jobTitle = req.body.jobTitle;
  }
  if (req.body.freelance != null) {
    res.user.freelance = req.body.freelance;
  }
  if (req.body.location != null) {
    res.user.location = req.body.location;
  }
  if (req.body.userImage != null) {
    res.user.userImage = req.body.userImage;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.deleteOne();
    res.json({ message: 'Deleted user' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
async function getUser(req,res,next){
    let user;
    try{
        user = await User.findById(req.params.id);
        if(user == null){
            return res.status(404).json({message:'cannot find user'});
        }
    } catch(err){
        return res.status(500).json({message:err.message});
    }
    res.user = user;
    next();
}

module.exports = router;