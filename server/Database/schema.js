const pg = require('pg');
const dbURL = process.env.Database_URL || 'postgres://localhost:5432/EKA';

const client = new pg.Client(dbURL);
client.connect();
const query = client.query(
	'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });