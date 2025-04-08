var express = require("express");
var app = express();

const mongoose = require('mongoose');

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

//Creating Mongoose Schema
const ProjectSchema = new mongoose.Schema ({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const cardList = [
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
]

//rest api route
//Replacing static data with MongoDB query
app.get('/api/projects', async (req,res) => {
    const projects = await Project.find({});
    res.json({statusCode: 200, data: projects, message:"Success"})
});

var port = process.env.port || 3000;

// app.get('/add', (req, res) => {
//     const num1 = parseFloat(req.query.num1);
//     const num2 = parseFloat(req.query.num2);

//     // Check if number
//     if (isNaN(num1) || isNaN(num2)) {
//         // error message
//         return res.status(400).send('Invalid numbers');
//     }

//     // Calculate the sum of the two numbers
//     const sum = num1 + num2;

//     // Result
//     res.send(`The sum of ${num1} and ${num2} is ${sum}`);
// });

//stating the server
app.listen(port, () => {
    console.log("App listening to: "+port);
});