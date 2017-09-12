var { Pool, Client } = require('pg');
let pgPort = process.env.pgPort || 5432;
let pgUser = process.env.pgUser || 'postgres';
let pgPassword = process.env.pgPW || '1234';
let pgDB = process.env.pgDB || 'someapp';
var connectionString = `postgres://${pgUser}:${pgPassword}@localhost:${pgPort}/${pgDB}`;

var schema = require('./schema.js')

const client = new Client(connectionString);
client.connect();
const query = client.query(schema, (err, res) => {
	console.log(err, res);
	client.end();
});