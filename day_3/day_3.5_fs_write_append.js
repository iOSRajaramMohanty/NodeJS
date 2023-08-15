const fs = require('fs');
const path = require('path');

// write to file
fs.writeFile(
    path.join(__dirname, 'test.txt'),
    'Hello World!',
    (err) => {
        if (err) throw err;

        console.log('File written to...');

        // append to file
        fs.appendFile(
            path.join(__dirname, 'test.txt'),
            'I love Node.js!',
            (err) => {
                if (err) throw err;
                console.log('File appended to...');
            });
    });

// Assignment
// 1. Please write a program which will allow use to keep on appending to the 
//    file test.txt every time the user runs the program.

