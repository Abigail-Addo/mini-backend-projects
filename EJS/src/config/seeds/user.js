exports.seed = function (knex) {

    return knex('user')
    .del()
    .then(function () {
        // insert seed entries
        return knex('user').insert([
            {username: 'Abigail', email: 'addoa350@gmail.com'}
        ]);
    });
    };