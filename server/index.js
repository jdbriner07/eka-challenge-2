const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./Database/db.js');
const queries = require('./Database/queries.js');

db.connect();
const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.get('/login/*/*', function(req, res) {
	db.query(queries.loginOrGetUserInfo(req.params[0], req.params[1]), (err, response) => {
		if (err) {
			console.log(err);
			res.send(202).send(err);
		} else {
			res.send(response.rows[0]);
		}
	})
})

app.post('/signup', function(req, res) {
	db.query(queries.signup(req.body.username, req.body.password, req.body.email), (err, response) => {
		if (err) {
			res.status(202).send(err);
		} else {
			res.sendStatus(201);
		}
	})
})

app.post('/updateInfo2', function(req, res) {
	db.query(queries.updateInfo2(req.body.username, req.body.password, req.body.name, req.body.phoneNumber), (err, response) => {
		if (err) {
			console.log(err);
			res.status(202).send(err);
		} else {
			res.sendStatus(201);
		}
	})
})

app.post('/updateInfo3', function(req, res) {
	db.query(queries.updateInfo3(req.body.username, req.body.password, req.body.address), (err, response) => {
		if (err) {
			console.log(err);
			res.status(202).send(err);
		} else {
			res.sendStatus(201);
		}
	})
})

app.post('/login', function(req, res) {
	db.query(queries.loginOrGetUserInfo(req.body.username, req.body.password), (err, response) => {
		if (err) {
			console.log(500).send(err);
		} else {
			if (response.rowCount) {
				res.sendStatus(201);
			} else {
				res.sendStatus(202);
			}
		}
	})
})

app.get('*', function(req, res) {
	res.redirect('/');
})

app.listen(process.env.PORT || 3000, function() {
	console.log(`server is listening on port ${process.env.PORT || 3000}`);
})