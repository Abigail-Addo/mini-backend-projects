const express = require('express');
const path = require('path');
//require('dotenv').config()
const bodyParser = require('body-parser')
const routes = require('./router/routes')

//create an instance
const app = express();


//middlewares
app.use(bodyParser.json());
app.use('/api', routes)


const PORT = 4000;
app.use(express.static(path.join(__dirname, 'public')));


// const token = process.env.personal_token
app.get('/', (req, res) => {
  res.sendFile('index.html', err => {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
  });
})

app.get('/about', (req, res) => {
  res.sendFile('about.html', err => {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
  });
})
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
