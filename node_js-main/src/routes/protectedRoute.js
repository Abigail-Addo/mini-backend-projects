const express = require('express');
const router = express.Router();
// const admin = require('../controllers/admin');

router.get('/employee', async (req, res) => {

    await res.json({name :  "David", job_title: "footballer", 
    email: "david@mail.com"})
  
  })

router.post('/create-employee', async (req, res) => {
    console.log('2. inside create employee route')
    await res.status(200).json({message :  "employee created successfully"})

})


module.exports =router;