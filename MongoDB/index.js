// require express
const express = require('express');
// require body-parser
const bodyParser = require('body-parser');
//require cors
const cors = require('cors');
//require mongoose
const mongoose = require('mongoose');
const base = require('./routes/base');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

//app use body parser
app.use(bodyParser.json());
//allow origin access
app.use(cors({
    origin: '*'
  }));
// app use routes
app.use('/api', base);

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connected to db successfully..!")
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
}).catch(err => {
    console.log("Error: ", err);
    // process.exit();
});


