const express = require('express');
const route = require('./routes');
const cors = require('cors')
const app = express();
const PORT = 2023;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./src/router/routes')


const expressLayouts = require('express-ejs-layouts');
const { render } = require('ejs');


app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}))


app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/index');


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', route);
app.use('/api', router);

app.get('/', (req, res) => {
    res.render('pages/login', {title: "Login",} );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

