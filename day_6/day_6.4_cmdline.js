// example: node ./day_6.4_cmdline.js '{"id": 10, "date": "1980-01-31"}'

// read command line arguments

let query = process.argv[2];
let queryObject = JSON.parse(query);

// log query object
console.log(queryObject);

// log query object id
console.log(queryObject.id);

// extract keys from query object
let keys = Object.keys(queryObject);
// log keys
console.log(keys);

// extract values from query object
let values = Object.values(queryObject);
// log values
console.log(values);
