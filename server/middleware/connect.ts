import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const { database, host, user, password } = process.env;

const connection = createPool({
    database, host, user, password
})

connection.on('connection', (conn) => {
    console.log(`Connected to db ${conn.config.database}`);
});

export default connection;