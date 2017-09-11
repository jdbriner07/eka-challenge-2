const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('*', function(req, res) {
	res.sendfile(path.join(__dirname + '/../client/dist/index.html'));
})

app.listen(3000, function() {
	console.log('server is listening on port 3000');
})