const router = require('express').Router();
const knex = require('../../config/database')

const User = require('../controllers/user');
const Order = require('../controllers/order');

router.post('/login', (res, req) => {User.loginUser()});


router.get('sandbox', (res, req) => {
    res.send('this is a sandbox')
});

router.get('/v1/getMeals', async(res, req) => {
      const meals = await knex('meals').select('*').orderBy('id', 'desc');
    //   console.log(meals);
      res.json({meals: meals})
});

router.get('/v1/getOrders', async(res, req) => {
  Order.getOrders(req, res);
});

router.post('/v1/createOrder', async(res, req) => {
  Order.createOrder(req, res);
});

router.delete('/v1/deleteOrder', async(res, req) => {
  Order.deleteOrder(req, res);
});




module.exports = router;