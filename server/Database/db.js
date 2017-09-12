var { Pool, Client } = require('pg');

let pgPort = process.env.pgPort || 5432;
let pgUser = process.env.pgUser || 'postgres';
let pgPassword = process.env.pgPW || '1234';
let pgDB = process.env.pgDB || 'someapp';
var connectionString = `postgres://${pgUser}:${pgPassword}@localhost:${pgPort}/${pgDB}`;

const client = new Client(connectionString);

module.exports = client;