const mongoose = require('mongoose');

//Creating Mongoose Schema
const ProjectSchema = new mongoose.Schema ({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;