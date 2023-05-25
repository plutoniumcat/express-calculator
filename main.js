// Import express
const express = require('express');
// Create an instance of express
const app = express();
// Set up any data the server needs
const port = 3000;

// Enable use of JSON and form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configure routes
app.get('/', (request, response) => {
    // Send a response in HTML
    response.send('Hello World!');
});

app.get('/calculator/:num1/:operator/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let operator = request.params.operator;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === "add") {
        response.json(
            {
                "operation": `${num1} plus ${num2}`,
                "result": (num1 + num2)
            }
        );
    }
    else if (operator === "subtract") {
        response.json(
            {
                "operation": `${num1} minus ${num2}`,
                "result": (num1 - num2)
            }
        );
    }
    else if (operator === "divide") {
        response.json(
            {
                "operation": `${num1} divided by ${num2}`,
                "result": (num1 / num2)
            }
        );
    }
    else if (operator === "multiply") {
        response.json(
            {
                "operation": `${num1} times ${num2}`,
                "result": (num1 * num2)
            }
        );
    }
    else {
        // Respond with 404 status
        response.status(404).send("Not found.");
    }
})

// Tell the app to listen for web traffic
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});