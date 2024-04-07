const knex = require('../../config/database')

const mealController = {

    landingPage: async (req, res) => {

        try {

            let usr = req.query.username;
            // if usr is not null or usr is not empty redirect to login page
            // select ur from users where username = usr
            // const user = await knex('users').select('*').where('username', usr);

            if (!usr) {
                res.redirect('/login');
            } else {
                let cuisine = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian'];

                // get meals from db
                const meals = await knex('meals').select('*').orderBy('id', 'desc');
                // console.log(meals);

                if(!meals){
                    res.render('pages/notFound', {    title: "Not Found",
                    user: usr,});
                }


                res.render('pages/home', {
                    title: "Home",
                    user: usr,
                    kitchen: cuisine,
                    meals: meals
                });
            }

        } catch {
            (err => {
                console.log(err);
            })

        }
    },



    getMeal: (req, res) => {
        res.render('pages/meal', {
            title: "Meal",
        });
    },

    deleteMeal: (req, res) => {
        res.render('pages/meal', {
            title: "Meal",
        });
    }

};

//export controller
module.exports = mealController;