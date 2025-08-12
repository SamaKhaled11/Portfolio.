const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    proImg:String,
    proName:String,
    desc:String
});

const Project = mongoose.model("Project",ProjectSchema);
module.exports =Project;