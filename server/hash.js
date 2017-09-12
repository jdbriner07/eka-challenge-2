var crypto = require('crypto');

module.exports = function(password) {
	var hash = crypto.createHash('sha256');
	hash.update(password);
	password = hash.digest('hex');
	return password.substring(0, 39);
}