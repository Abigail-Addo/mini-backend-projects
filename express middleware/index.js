const express = require('express');
const app = express();

// app.use(logger)

app.get('/', (req, res, err) => {
    if (err) {
        res.status(404).send('error index.html not found');
    }
})

app.get('/admin', logger, (req, res) => {
    // console.log('3. before send json')
    res.status(200).json({ message: 'this user is admin' })
    console.log('3. after send json')


});

// custom middleware
function logger(req, res, next) {

    if (true) {
        console.log(" 1. before we get to router")
        console.log("2. authenticated")
        next();
        console.log("4. after we got to router")

        return
    }

    // return res.status(401).json({ message: 'Unauthorized' });
    console.log('unauthorized')

}

app.use((req, res) => {
    res.status(404).send('Not Found');
});

const PORT = 2020;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

