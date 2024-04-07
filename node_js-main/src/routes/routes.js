const express = require('express');
const router = express.Router();
const login = require('../controllers/login');
const logout = require('../controllers/logout');

router.post('/auth', async (req, res) => {
  await  login.loginUser(req, res);
})


router.get('/', async (req, res) => {
    await res.json({message :  "api is working perfectly"})
})

router.post('/logout', async (req, res) => {
  await  logout.logoutUser(req, res);
})




module.exports = router;