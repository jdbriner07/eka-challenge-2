var { Pool, Client } = require('pg');
var connectionString = `postgres://postgres:${process.env.pgPW}@localhost:5432/someapp`;

const client = new Client(connectionString);

module.exports = client;