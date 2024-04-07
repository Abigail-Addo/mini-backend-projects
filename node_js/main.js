const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({
    origin: '*',
}));


const path = require('path');
app.use(express.static(path.join(__dirname, './src/public')));

const routes = require('./src/routes/routes')
const loggerUser = require('./src/middleware/verifyToken')
const privateRoutes = require('./src/routes/protectedRoutes')


app.use('/api', routes)

app.get('/', (req, res) => {
    res.sendFile('index.html', err => {
        if(err){
            res.status(403).send("Index.html not found");
        }
    });
})

// global custom middleware
app.use(loggerUser)

//protected routes
app.use('/', privateRoutes)

app.get('/admin', (req, res)  => {
  res.status(200).json({message: 'this user is admin'})
  console.log('3. after send json')
});


app.use((req, res) => {
    res.status(404).send("Not found");
});

const PORT = 4050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});