var express = require("express");
var app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var port = process.env.port || 3000;

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if number
    if (isNaN(num1) || isNaN(num2)) {
        // error message
        return res.status(400).send('Invalid numbers');
    }

    // Calculate the sum of the two numbers
    const sum = num1 + num2;

    // Result
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(port, () => {
    console.log("App listening to: "+port);
});