const fs = require("fs");

// object to hold our data
let dataObject = {};

// read users data from file, when done call the callback
fs.readFile(
    "../data/users.json",
    "utf-8",
    (err, text) => {
        if (err) {
            // if there was an error, display a warning, but continue
            console.warn("Could not read data file:", err);
        } else {
            // Otherwise, parse the file contents and assign to the object
            Object.assign(dataObject, JSON.parse(text));
        }
        console.log(dataObject);
    }
);

// the main thread
console.log("The main thread...");

// As next steps
// 1. Read about JSON.parse() and JSON.stringify() and code some examples.

