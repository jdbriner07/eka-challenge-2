const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./Database/db.js');
const queries = require('./Database/queries.js');

db.connect();
const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.post('/signup', function(req, res) {
	db.query(queries.signup(req.body.username, req.body.password, req.body.email), (err, response) => {
		if (err) {
			res.send(err);
		} else {
			res.sendStatus(201);
		}
	})
})

app.post('/updateInfo2', function(req, res) {
	db.query(queries.updateInfo2(req.body.username, req.body.password, req.body.name, req.body.phoneNumber), (err, response) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.sendStatus(201);
		}
	})
})

app.post('/updateInfo3', function(req, res) {
	db.query(queries.updateInfo3(req.body.username, req.body.password, req.body.address), (err, response) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.sendStatus(201);
		}
	})
})

app.listen(process.env.PORT || 3000, function() {
	console.log('server is listening on port ${process.env.PORT || 3000}');
})