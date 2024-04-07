const express = require('express');
const route = require('../route');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
// const authenticated = require('./loggedIn');

//middleware
app.use(bodyParser.json());
//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', route);
//use body-parser



app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'));
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(4004, () => {
    console.log('Server is running on port 4004');
});