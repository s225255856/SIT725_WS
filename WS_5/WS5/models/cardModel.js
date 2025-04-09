const mongoose = require('mongoose');

//Creating Mongoose Schema
const ProjectSchema = new mongoose.Schema ({
    title: String,
    image: String,
    link: String,
    description: String,
});

const cardTemplate = mongoose.model('Cards', cardSchema);
module.exports = cardTemplate;