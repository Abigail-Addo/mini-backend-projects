const router = require('express').Router();
const Meal = require('./src/controllers/meal');


router.get('/login', (req, res) => {
    res.render('pages/index', {title: "Login"} );
});


router.get('/home', (req, res) => {
    Meal.landingPage(req, res);
});





router.get('/employees', (req, res) => {
    let usr = req.query.username;
    if(!usr){
        res.redirect('/login');
    }
    else{
    res.render('pages/employees', {title: "Employees", user:usr} );
    }
  ne
});
    


module.exports = router;
