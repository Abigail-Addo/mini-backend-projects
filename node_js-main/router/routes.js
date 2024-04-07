const express = require('express')
const router = express.Router();


router.get('/all-users', (req, res) => {

})

router.post('/user', (req, res) => {
      //code goes here

  if (req.body === null || req.body== ""){
    res.status(403).send('name cannot be empty')
  }
  const name  = req.body.name;
  const email = req.body.email;

  const user = {
    name: name,
    email : email,
    age   : 23,
    height: '5.6ft'
  }

  res.status(200).json(user)

})

router.delete('/delete-user', (req, res) => {
})


module.exports = router;