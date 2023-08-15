const express = require('express');
const path = require('path');
const moment = require('moment');

const app = express();
const PORT = 5001;

// create a logger middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

// use logger middleware
app.use(logger);

// use body parser middleware
app.use(express.json())

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// set the router
app.use('/api/users', require('./routes/apis/users'))

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
// use thunderbird to make the calls and see the result

// Assignment:
// 1. Update the code so that the logger middleware appends the logs messages to a file called logs.txt
//    Make sure that --
//    a. The file is created if it does not exist.
//    b. Every message is appended to a new line in the file.

// 2. Create a new function logger in a directory "middleware" and include it in this file.
//      The goal is to move the logger middleware to the new file and in its proper directory.
