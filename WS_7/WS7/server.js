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

//Create HTTP server from app
const http = require('http').createServer(app);
//Pass http server to socket.io
const io = require('socket.io')(http);

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

//socket
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});

//stating the server
http.listen(port, () => {
    console.log("App listening to: "+port);
});