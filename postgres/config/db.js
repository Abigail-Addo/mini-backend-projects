import pg from 'pg';

const { Pool } = pg;

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'password123',
    max: 20,
    port: 5432,
    database: 'crud-postgres'

})

export default pool;