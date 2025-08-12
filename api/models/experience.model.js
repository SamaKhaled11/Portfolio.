const mongoose = require('mongoose');

const experSchema = mongoose.Schema({
    experience:String,
    level:String
});

const Exper = mongoose.model("Exper",experSchema);
module.exports =Exper;