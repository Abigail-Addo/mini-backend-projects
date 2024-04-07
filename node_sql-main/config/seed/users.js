exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { name : 'isaac',  email: 'yeboah@mail.com', password: 'admin1234' },
          {name : 'james' , email: 'user2@example.com', password: 'password2' },
        ]);
      });
  };