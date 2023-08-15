const fs = require('fs');
const path = require('path');

// write to file
fs.readdir(
    path.join(__dirname),
    (err, data) => {
        if (err) throw err;
        console.log('Files in directory: ', data);
    });

// Assignment:
// Please write a program where the diretcory can be specified as a const variable
// and the files in that directory can be listed. Also, explore what you can do if
// an item is a file or a directory itself. Which other packages can you use?
