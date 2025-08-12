const express = require('express');
const router = express.Router();
const Exper = require('../models/experience.model.js');


router.get('/', async (req,res)=>{
    try{
        const expers = await Exper.find();
        res.json(expers);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

router.get('/:id',getExper,(req,res)=>{
    res.json(res.exper)
});

router.post('/', async (req, res) => {
    const newExper = new Exper({
          experience: req.body.experience,
          level: req.body.level
    });
    try {
        const savedExper = await newExper.save();
        res.status(201).json(savedExper);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getExper, async (req, res) => {
    if (req.body.experience != null) {
        res.exper.experience = req.body.experience;
    }
    if (req.body.level != null) {
        res.exper.level = req.body.level;
    }
    try {
        const updatedExper = await res.exper.save();
        res.json(updatedExper);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getExper, async (req, res) => {
  try {
    await res.exper.deleteOne();
    res.json({ message: 'Deleted exper' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getExper(req,res,next){
    let exper;
    try{
        exper = await Exper.findById(req.params.id);
        if(exper == null){
            return res.status(404).json({message:'cannot find exper'});
        }
    } catch(err){
        return res.status(500).json({message:err.message});
    }
    res.exper = exper;
    next();
}

module.exports = router;