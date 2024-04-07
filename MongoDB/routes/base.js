const router = require('express').Router();
const User = require('../controllers/User');

router.get('/', (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});

router.post('/create-user', async (req, res) => {
    await User.CreateUser(req, res);
});


module.exports = router;