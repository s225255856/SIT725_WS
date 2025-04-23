const express = require("express");
const path = require('path');
const app = express();
const mongoose = require('mongoose');
//const port = 3000;
var port = process.env.port || 3000

//Import route file 
const routes = require('./routes');
const Project = require('./models');
app.use("/", routes);

//mount the route at /api/hello
//app.use('/api/projects', cardRoute);

//root route
// app.get('/', (req, res) => {
//     res.send('Welcome to dinner!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running at https://localhost:${PORT}`);
// });


//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

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