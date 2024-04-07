const knex = require('knex')
require('dotenv').config();
// const mongoose = require('mongoose');
const knexfile = require('./knexfile')

const db = knex(knexfile.production)

// let uri = 'mongodb+srv://kojoyeboah53i:saints_salvation2@cluster0.sk4iy96.mongodb.net/shopping?retryWrites=true&w=majority'
// Connect to MongoDB
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const database = mongoose.connection;

// database.on('error', (err) => {
//   console.error(`MongoDB connection error: ${err}`);
// });

// database.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Create a Knex instance
// const knexInstance = knex(knexfile.knex);


// async function create_users_table() {
//     const tableExists = await db.schema.hasTable('users');
    
//         if(!tableExists) {
    
//            return db.schema.createTable('shopping', (table) => {
           
//                 }).then(() => {
//                 console.log('"shopping" table created');
//                 });
//                 }
//     }

//     async function create_employees_table() {
//         const tableExists = await db.schema.hasTable('employees');
        
//             if(!tableExists) {
        
//                return db.schema.createTable('employees', (table) => {
//                     table.increments('id').primary();
//                     table.string('name');
//                     table.string('email');
//                     table.string('job_title');
//                     }).then(() => {
//                     console.log(' "employees" table created');
//                     });
//                     }
        // }

// create_users_table();
// create_employees_table();




module.exports = db;