const express = require('express');
const router = express.Router();
const Project = require('../models/project.model.js');


router.get('/', async (req,res)=>{
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

router.get('/:id',getProject,(req,res)=>{
    res.json(res.project)
});

router.post('/', async (req, res) => {
    const newProject = new Project({
       proImg: req.body.proImg,
       proName: req.body.proName,
       desc: req.body.desc
    });
    try {
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getProject, async (req, res) => {
  if (req.body.proImg != null) {
    res.project.proImg = req.body.proImg;
  }
  if (req.body.proName != null) {
    res.project.proName = req.body.proName;
  }
  if (req.body.desc != null) {
    res.project.desc = req.body.desc;
  }
  try {
    const updatedProject = await res.project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getProject, async (req, res) => {
  try {
    await res.project.deleteOne();
    res.json({ message: 'Deleted project' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getProject(req,res,next){
    let project;
    try{
        project = await Project.findById(req.params.id);
        if(project == null){
            return res.status(404).json({message:'cannot find project'});
        }
    } catch(err){
        return res.status(500).json({message:err.message});
    }
    res.project = project;
    next();
}

module.exports = router;