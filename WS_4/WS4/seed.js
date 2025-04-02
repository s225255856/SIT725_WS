const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
    {
        title: "That barrack",
        image: "images/250.png",
        link: "About this town hall",
        description: "give me your trophy"
    },
    {
        title: "Another barrack",
        image: "images/250.png",
        link: "About archer queen",
        description: "give me your trophy"
    }
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
