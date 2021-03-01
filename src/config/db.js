const { Pool } = require('pg')

let dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
};

if (process.env.NODE_ENV !== 'development') {
    dbConfig.ssl = {
        rejectUnauthorized: false
    }
}

console.log(process.env.NODE_ENV)

module.exports = new Pool(dbConfig);