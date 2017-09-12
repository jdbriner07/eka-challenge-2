var { Pool, Client } = require('pg');
var connectionString = `postgres://postgres:${process.env.pgPW}@localhost:5432/someapp`;

var schema = require('./schema.js')

const client = new Client(connectionString);
client.connect();
const query = client.query(schema, (err, res) => {
	console.log(err, res);
	client.end();
});