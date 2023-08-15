const express = require('express')
const router = express.Router()
const users = require('../../../data/users')
const { User } = require('../../../lib/user')
const lodash = require('lodash')

// gets users
// what we dont see is /api/users in the route
router.get('/', (req, res) => {
    console.log(req.query)

    let results = lodash.filter(users, req.query);

    // Bug 1 (attempt to fix)
       // Handle case when a request comes in with an id that does not exist in the data.
    // Bug 2 (attempt to fix)
       // Do type checking of the inputs received.
    // Bug 3 (attempt to fix)
       // Handle the case when non-existing parameters are sent in req query.
    // Bug 4
       // Why are we case sensitive?

    res.json(results)
});

// gets a single user
// what we dont see is /api/users in the route
router.get('/:id', (req, res) => {
    let found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }
    else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
});

// create a user
router.post('/', (req, res) => {
    let data = req.body

    let newUser = new User(data.name, data.dob)

    users.push(newUser)

    console.log(users.slice(-1)[0]) // read what we are doing here with slice and -1

    res.send(newUser)

    // Bug 1
       // Type check for name
    // Bug 2
       // Type check for dob
    // Bug 3
       // Check for presence of name
    // Bug 4
       // Check for empty name
});


module.exports = router
