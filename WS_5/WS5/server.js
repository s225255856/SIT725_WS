const express = require("express");
const app = express();
const PORT = 3000;

//Import route file 
const cardRoute = require('./routes/cardRoute');

//mount the route at /api/hello
app.use('/api/card', cardRoute);

//root route
app.get('/', (req, res) => {
    res.send('Welcome to dinner!');
});

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});

var port = process.env.port || 3000;

//stating the server
app.listen(port, () => {
    console.log("App listening to: "+port);
});