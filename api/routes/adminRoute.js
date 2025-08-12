const express = require('express');
const router = express.Router();
const Admin = require('../models/admin.model.js');

router.get('/', async (req,res)=>{
    try{
        const Admins = await Admin.find();
        res.json(Admins);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});
router.get('/:id',getAdmin,(req,res)=>{
    res.json(res.admin)
});
router.post('/', async (req, res) => {
    const newAdmin = new Admin({
       userName: req.body.userName,
       password: req.body.password
    });
    try {
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.patch('/:id', getAdmin, async (req, res) => {
  if (req.body.userName != null) {
    res.admin.userName = req.body.userName;
  }
  if (req.body.password != null) {
    res.admin.password = req.body.password;
  }
  try {
    const updatedAdmin = await res.admin.save();
    res.json(updatedAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete('/:id', getAdmin, async (req, res) => {
  try {
    await res.admin.deleteOne();
    res.json({ message: 'Deleted admin' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
async function getAdmin(req,res,next){
    let admin;
    try{
        admin = await Admin.findById(req.params.id);
        if(admin == null){
            return res.status(404).json({message:'cannot find admin'});
        }
    } catch(err){
        return res.status(500).json({message:err.message});
    }
    res.admin = admin;
    next();
}

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const admin = await Admin.findOne({ userName });

        if (!admin) {
            return res.json({ success: false, message: 'Invalid username or password' });
        }
        if (admin.password === password) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
module.exports = router;