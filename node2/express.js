// import the express module
const express = require('express');
// imports the path module
const path = require('path');
// creates an instance by invoking the express function
const app = express();

// need more explanation on what this does??
require('dotenv').config() 

// import the body-parser module
const bodyParser = require('body-parser')

//in-built middleware
app.use(bodyParser.json());

// import the route module
const routes = require('./router/route')

// path prefix
app.use('/result', routes);

// the port number for the application
const PORT = 5000;

// middleware
app.use(express.static(path.join(__dirname, 'public')));


// handling the url
app.get('/', (req, res) => {
    res.sendFile('index.html', err => {
if(err){
    res.status(500).send('Internal Server Error');
}
    });
});

// handling errors
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// starts the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});