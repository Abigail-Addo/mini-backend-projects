// app.js
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('This is my middleware.');
  next(); // Move to the next middleware or route handler
};

const authenticated = (req, res, next) => {
   const auth = req.body.auth;
   if(auth){
         next();
   }
    else{
            res.json({ message :'you are not authenticated'});
    }
}

// Middleware function applied to a specific route
app.get('/special', myMiddleware, (req, res) => {
  console.log('This is a special route.');
});

// Regular route
app.get('/', (req, res) => {
  console.log('Hello from Express!');
});

app.post('/user', authenticated,( req, res) => {
  
    res.json({ message :'you are authenticated, :)'});

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
