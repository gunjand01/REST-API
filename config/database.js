const { createPool } = require("mysql");

const pool=createPool({
    port: 3306,
    host: 'localhost',
    user:'root',
    password: 'Pranoti@01',
    database: 'test',
    connectionLimit: 10
})

module.exports = pool;