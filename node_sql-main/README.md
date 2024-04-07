# node_sql

 nodejs application connected to an sql database

 ## install

 - connection a database
 - run npm install
 - run migrations
 - seed the tables with data
 - start the application

## make a migrations file

- npx knex migrate:make create_users_table
- npx knex migrate:latest               //migrate all tables to the database
- npx knex migrate:rollback --all      //drop all tables from the database

## make a seeder file

- npx knex seed:make create_user_seeder     //creating new seeder
- npx knex seed:run                        //seed the tables with data

## SQL

- sliqte3
- mongoDB
- mysql
- postgreSQL

## ASSIGNMENTS

- [x] clone repository && run npm install
- [ ] write client side javascript to register new user
- [ ] write client side javascript to get all employees
- [ ] write client side javascript to create new employee
- [ ] write client side javascript to update employee
- [ ] write client side javascript to delete employee
