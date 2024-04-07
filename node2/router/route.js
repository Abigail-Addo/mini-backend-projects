// this is a router module for a post route

// import the express module
const express = require('express');

// creates an express router instance
const router = express.Router();

// post route
router.post('/student', (req, res) => {

    if (req.body === null || req.body == "") {
        res.status(403).send('reaction cannot be empty')
    }

    const reaction = req.body.reaction;

    const resultSummary = {
        reaction: reaction,
        memory: 92,
        verbal: 61,
        Visual: 72
        }

    res.status(200).json(resultSummary)

})


// exports the route module
module.exports = router;