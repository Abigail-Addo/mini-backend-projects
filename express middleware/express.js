const express = require('express');
const app = express();


app.use(logger)

app.get('/', (req, res) => {
    console.log('Home Page');
    res.send('Home Page');
})

app.get('/users', auth, (req, res) => {
    console.log('Users Page');
    res.send({message: 'Users Page'});
})

// middleware is a function that executes between the time that the server gets a request and the time that the server sends a response
// they run in the order that you put it

function logger(req, res, next) {
    console.log(req.originalUrl);
    // console.log('Log');
    next()
}

function auth(req, res, next) {
    if(req.query.admin === 'true') {
        next()
    } else {
        res.send('No Auth')
    }
    // console.log('auth');
    // next()
}


const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})