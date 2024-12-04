const express = require('express');
const app = express();
const helloWorldRoutes = require('./Routes/HelloWorld/helloWorldRoute');

const PORT = 3000;

// Middleware that logs all incoming requests for review of incoming URL's and status
app.use((req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
})

// Split up the routes into multiple modular files for reusability
app.use('/', helloWorldRoutes);

// Allows for any page that there is no route for to return a 404 not found error.
app.use((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).json({ message: "Page Not Found!"});
})

// Any error in the request is handled by this to help users and admins discover what's wrong.
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json( { message: "Server Error!" } );
})

app.listen(PORT,  () => {
    console.log(`Listening on PORT ${PORT}`);
})