const express = require("express");
const path = require('path');
const app = express();
//const port = 3000;
var port = process.env.port || 3000

//Import route file 
const cardRoute = require('./routes');
//const Project = require('./models');
app.use("/", cardRoute);

//mount the route at /api/hello
app.use('/api/card', cardRoute);

//root route
// app.get('/', (req, res) => {
//     res.send('Welcome to dinner!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running at https://localhost:${PORT}`);
// });

const mongoose = require('mongoose');

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema ({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

app.use(express.static(path.join(__dirname+'/public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rest api route
//Replacing static data with MongoDB query
app.get('/api/projects', async (req,res) => {
    const projects = await Project.find({});
    res.json({statusCode: 200, data: projects, message:"Success"})
});

//stating the server
app.listen(port, () => {
    console.log("App listening to: "+port);
});