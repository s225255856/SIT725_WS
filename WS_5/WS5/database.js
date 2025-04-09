const mongoose = require('mongoose');

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const Project = mongoose.model('Project', ProjectSchema);

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rest api route
//Replacing static data with MongoDB query
app.get('/api/projects', async (req,res) => {
    const projects = await Project.find({});
    res.json({statusCode: 200, data: projects, message:"Success"})
});